# test-inframap

## Setup

```sh
brew install inframap
brew install graphviz # use dot command
cpan Graph::Easy # use graph-easy command
```

## Run inframap

```sh
$ inframap generate main.tf
strict digraph G {
	"aws_cloudfront_distribution.test"->"aws_s3_bucket.test";
	"aws_cloudfront_distribution.test" [ height=1.15, image="/Users/mziyut/Library/Caches/inframap/assets/aws/Networking_and_Content_Delivery/Amazon-CloudFront.png", imagepos=tc, labelloc=b, shape=plaintext ];
	"aws_s3_bucket.test" [ height=1.15, image="/Users/mziyut/Library/Caches/inframap/assets/aws/Storage/Amazon-Simple-Storage-Service-S3.png", imagepos=tc, labelloc=b, shape=plaintext ];

}
$ inframap generate main.tf | dot -Tpng > inframap_generate.png
# generate inframap_generate.png
$ inframap generate main.tf | dot -Tsvg > inframap_generate.svg
# generate inframap_generate.svg
$ inframap generate main.tf | /usr/local/Cellar/perl/5.36.0/bin/graph-easy

 aws_cloudfront_distribution.test

  |
  |
  v

        aws_s3_bucket.test

```

## Other

### Run terraform graph

```sh
$ terraform graph
digraph {
        compound = "true"
        newrank = "true"
        subgraph "root" {
                "[root] aws_cloudfront_distribution.test (expand)" [label = "aws_cloudfront_distribution.test", shape = "box"]
                "[root] aws_cloudfront_origin_access_identity.test (expand)" [label = "aws_cloudfront_origin_access_identity.test", shape = "box"]
                "[root] aws_s3_bucket.test (expand)" [label = "aws_s3_bucket.test", shape = "box"]
                "[root] aws_s3_bucket_acl.example_bucket_acl (expand)" [label = "aws_s3_bucket_acl.example_bucket_acl", shape = "box"]
                "[root] aws_s3_bucket_policy.test (expand)" [label = "aws_s3_bucket_policy.test", shape = "box"]
                "[root] aws_s3_bucket_website_configuration.test (expand)" [label = "aws_s3_bucket_website_configuration.test", shape = "box"]
                "[root] data.aws_iam_policy_document.test (expand)" [label = "data.aws_iam_policy_document.test", shape = "box"]
                "[root] provider[\"registry.terraform.io/hashicorp/aws\"]" [label = "provider[\"registry.terraform.io/hashicorp/aws\"]", shape = "diamond"]
                "[root] aws_cloudfront_distribution.test (expand)" -> "[root] aws_cloudfront_origin_access_identity.test (expand)"
                "[root] aws_cloudfront_distribution.test (expand)" -> "[root] aws_s3_bucket.test (expand)"
                "[root] aws_cloudfront_origin_access_identity.test (expand)" -> "[root] provider[\"registry.terraform.io/hashicorp/aws\"]"
                "[root] aws_s3_bucket.test (expand)" -> "[root] provider[\"registry.terraform.io/hashicorp/aws\"]"
                "[root] aws_s3_bucket_acl.example_bucket_acl (expand)" -> "[root] aws_s3_bucket.test (expand)"
                "[root] aws_s3_bucket_policy.test (expand)" -> "[root] data.aws_iam_policy_document.test (expand)"
                "[root] aws_s3_bucket_website_configuration.test (expand)" -> "[root] aws_s3_bucket.test (expand)"
                "[root] data.aws_iam_policy_document.test (expand)" -> "[root] aws_cloudfront_origin_access_identity.test (expand)"
                "[root] data.aws_iam_policy_document.test (expand)" -> "[root] aws_s3_bucket.test (expand)"
                "[root] provider[\"registry.terraform.io/hashicorp/aws\"] (close)" -> "[root] aws_cloudfront_distribution.test (expand)"
                "[root] provider[\"registry.terraform.io/hashicorp/aws\"] (close)" -> "[root] aws_s3_bucket_acl.example_bucket_acl (expand)"
                "[root] provider[\"registry.terraform.io/hashicorp/aws\"] (close)" -> "[root] aws_s3_bucket_policy.test (expand)"
                "[root] provider[\"registry.terraform.io/hashicorp/aws\"] (close)" -> "[root] aws_s3_bucket_website_configuration.test (expand)"
                "[root] root" -> "[root] provider[\"registry.terraform.io/hashicorp/aws\"] (close)"
        }
}

$ terraform graph | dot -Tpng > terraform_graph.png
# generate terraform_graph.png
$ terraform graph | dot -Tsvg > terraform_graph.svg
# generate terraform_graph.svg
$ terraform graph | /usr/local/Cellar/perl/5.36.0/bin/graph-easy
                                                          + - - - - - - - - - - - - - - - - - - - - - - - - - - +
                                                          '                        root                         '
                                                          '                                                     '
                                                          ' +-------------------------------------------------+ '
                                                          ' |                   [root] root                   | '
                                                          ' +-------------------------------------------------+ '
                                                          '   |                                                 '
                                                          '   |                                                 '
                                                          '   |                                                 '
       +- - - - - - - - - - - - - - - - - - - - - - - - -     |                                                   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -+
       '                                                      v                                                                                                                                      '
       ' +------------------------------------------+       +---------------------------------------------------------------------------------------+       +--------------------------------------+ '
       ' | aws_s3_bucket_website_configuration.test | <---- |            [root] provider["registry.terraform.io/hashicorp/aws"] (close)             | ----> | aws_s3_bucket_acl.example_bucket_acl | '
       ' +------------------------------------------+       +---------------------------------------------------------------------------------------+       +--------------------------------------+ '
       '   |                                                  |                                                    |                                          |                                      '
       '   |                                                  |                                                    |                                          |                                      '
       '   |                                                  v                                                    v                                          |                                      '
       '   |                                                +-------------------------------------------------+  +----------------------------------+         |                                      '
       '   |                                                |            aws_s3_bucket_policy.test            |  | aws_cloudfront_distribution.test | ---+    |                                      '
       '   |                                                +-------------------------------------------------+  +----------------------------------+    |    |                                      '
       '   |                                                  |                                                    |                                     |    |                                      '
       '   |                                                  |                                                    |                                     |    |                                      '
       '   |                                                  v                                                    |                                     |    |                                      '
       '   |                                                +-------------------------------------------------+    |                                     |    |                                      '
       '   |                                           +--- |        data.aws_iam_policy_document.test        |    |                                     |    |                                      '
       '   |                                           |    +-------------------------------------------------+    |                                     |    |                                      '
       '   |                                           |      |                                                    |                                     |    |                                      '
       '   |                                           |      |                                                    |                                     |    |                                      '
       '   |                                           |      v                                                    |                                     |    |                                      '
       '   |                                           |    +-------------------------------------------------+    |                                     |    |                                      '
       '   |                                           |    |   aws_cloudfront_origin_access_identity.test    | <--+                                     |    |                                      '
       '   |                                           |    +-------------------------------------------------+                                          |    |                                      '
       '   |                                           |      |                                                                                          |    |                                      '
       '   |                                           |      |                                                   - - - - - - - - - - - - - - - - - -    |    |                                      '
       '   |                                           |      |                                                 '                                    '   |    |                                      '
       '   |                                           |      |                                                 '                                    '   |    |                                      '
       '   |                                           |      v                                                 '                                    '   |    |                                      '
       '   |                                           |    +-------------------------------------------------+ '                                    '   |    |                                      '
       '   |                                           |    | provider["registry.terraform.io/hashicorp/aws"] | '                                    '   |    |                                      '
       '   |                                           |    +-------------------------------------------------+ '                                    '   |    |                                      '
+ - - -    |                                           |      ^                                                 '                                    '   |    |                                      '
'          |                                           |      |                                                 '                                    '   |    |                                      '
'          |                                           |      |                                                 '                                    '   |    |                                      '
'   +------+-------------------------------------------+      |                                                 '                                    '   |    |                                      '
'   |      |                                                  |                                                 '                                    '   |    |                                      '
'   |      |                                                  |                                                   - - - - - - - - - - - - - - - - - -    |    |                                      '
'   |      |                                                  |                                                                                          |    |                                      '
'   |      |                                                +---------------------------------------------------------------------------------------+    |    |                                      '
'   |      +----------------------------------------------> |                                  aws_s3_bucket.test                                   | <--+    |                                      '
'   |                                                       +---------------------------------------------------------------------------------------+         |                                      '
'   |                                                         ^                                                    ^                                          |                                      '
'   +---------------------------------------------------------+                                                    +------------------------------------------+                                      '
'                                                                                                                                                                                                    '
'                                                                                                                                                                                                    '
+ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -+

```

## References

- [cycloidio/inframap: Read your tfstate or HCL to generate a graph specific for each provider, showing only the resources that are most important/relevant.](https://github.com/cycloidio/inframap)
- [Command: graph | Terraform | HashiCorp Developer](https://developer.hashicorp.com/terraform/cli/commands/graph)
- [Download | Graphviz](https://graphviz.org/download/)
- [ironcamel/Graph-Easy: Convert or render graphs (as ASCII, HTML, SVG or via Graphviz)](https://github.com/ironcamel/Graph-Easy)
- [aws_s3_bucket_acl | Resources | hashicorp/aws | Terraform Registry](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_acl)
- [aws_s3_bucket_website_configuration | Resources | hashicorp/aws | Terraform Registry](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_website_configuration)
- [aws_s3_bucket_policy | Resources | hashicorp/aws | Terraform Registry](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_policy)
- [aws_cloudfront_distribution | Resources | hashicorp/aws | Terraform Registry](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudfront_distribution)
- [aws_cloudfront_origin_access_identity | Resources | hashicorp/aws | Terraform Registry](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudfront_origin_access_identity)
