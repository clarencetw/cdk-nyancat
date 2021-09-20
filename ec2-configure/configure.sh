#!/bin/bash
yum update -y
yum install -y git
amazon-linux-extras install -y nginx1 
systemctl start nginx
systemctl enable nginx
rm -rf /usr/share/nginx/html
git clone https://github.com/cristurm/nyan-cat.git /usr/share/nginx/html
