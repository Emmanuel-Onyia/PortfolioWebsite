terraform {
    required_providers {
        aws = {
            version ="2.22.7"
            source = "hashicorp/aws"
        }
    }
}
provider "aws" {
    profile ="my-profile"

    region = "us-east-1"
