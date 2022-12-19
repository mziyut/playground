provider "aws" {
  region = "ap-northeast-1"
}

resource "aws_instance" "example" {
  instance_type = "t4g.micro"
  ami = "ami-0b69ea66ff7391e80"
}
