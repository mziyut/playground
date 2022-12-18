# tools/terraform/test-infracost

## Setup

### Infracost

https://www.infracost.io/docs/#1-install-infracost

### Terraform

```sh
brew install terraform
cd test-infracost
terraform init
```

## Run infracost


```sh
cd test-infracost
infracost breakdown --path .
```


### Result

```sh
> infracost breakdown --path .
Evaluating Terraform directory at .
  ✔ Downloading Terraform modules 
  ✔ Evaluating Terraform directory 
  ✔ Retrieving cloud prices to calculate costs 

Project: mziyut/playground/test-infracost

 Name                                                  Monthly Qty  Unit   Monthly Cost 
                                                                                        
 aws_instance.example                                                                   
 ├─ Instance usage (Linux/UNIX, on-demand, t4g.micro)          730  hours         $7.88 
 └─ root_block_device                                                                   
    └─ Storage (general purpose SSD, gp2)                        8  GB            $0.96 
                                                                                        
 OVERALL TOTAL                                                                    $8.84 
──────────────────────────────────
1 cloud resource was detected:
∙ 1 was estimated, it includes usage-based costs, see https://infracost.io/usage-file
```
