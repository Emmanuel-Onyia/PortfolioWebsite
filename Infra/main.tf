resource "aws_lambda_function" "myfunc' {
    filename = data.archive_file.zip.output_path       
    source_code_hash = data.archive_file.zip.output_base64sha256
    fuction_name = "myfunc"
    role = aws_iam_role.iam4lambda.arn
    handler = "func.handler"
    runtime = "python3.8"
}

resource "aws_iam_role" "iam4lambda" {
    name = "iam4lambda"
    assume_role_policy = <<EOF

{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "Service": "lambda.amazonaws.com"
            },
            "Action": "sts:AssumeRole"
        }
    ]
}

data "archive_file" "zip" {
    type = "zip"
    source_dir = "lambda"
    output_path = "lambda.zip"
}