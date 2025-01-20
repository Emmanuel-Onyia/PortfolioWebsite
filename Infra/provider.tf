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
    access_key = "AKIAV6L5VK5PEUVWOL5C"
    Secret_key = "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"
    region = "us-east-1"
}