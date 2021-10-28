terraform {
  required_version = ">= 1.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 3.63"
    }
  }
}

provider "aws" {
  region = var.region

  assume_role {
    role_arn = "arn:aws:iam::691666183092:role/PROJECT_tf_deployment"
  }
}
data "template_file" "swagger_user_api" {
  template = file(var.swagger_user_api_template)
  vars = {
    "info_title"            = "Authorization"
    "servers_0_url"         = "http://localhost/{basePath}"
    servers_0_url_basePath  = "/${local.base_path}"
    "lambda_invocation_arn" = "arn:aws:lambda:us-east-2:691666183092:function:sample-function"
    "info_version"          = "0.0.1"
  }
}

variable "region" {
  type = string
}
variable "swagger_user_api_template" {
  type = string
}

locals {
  env                    = terraform.workspace != "prod" ? "-${terraform.workspace}" : ""
  user_api_name          = "user-api${local.env}"
  api_gateway_stage_name = terraform.workspace
  base_path              = "token"
}


resource "aws_api_gateway_rest_api" "user_api" {
  body = data.template_file.swagger_user_api.rendered
  name = local.user_api_name
  endpoint_configuration {
    types = ["REGIONAL"]
  }
}

resource "aws_api_gateway_deployment" "user_api" {
  rest_api_id = aws_api_gateway_rest_api.user_api.id
  triggers = {
    redeployment = sha1(jsonencode(aws_api_gateway_rest_api.user_api.body))
  }
  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_api_gateway_stage" "user_api" {
  deployment_id = aws_api_gateway_deployment.user_api.id
  rest_api_id   = aws_api_gateway_rest_api.user_api.id
  stage_name    = local.api_gateway_stage_name
}
