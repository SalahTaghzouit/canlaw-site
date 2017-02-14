#!/usr/bin/env bash


docker build --build-arg ID_RSA_URL=https://s3-ap-southeast-1.amazonaws.com/warehouse.canlaw.asia/id_rsa/id_rsa \
    -t canlaw-site .

eval $(aws ecr get-login --region ap-southeast-1)
docker tag canlaw-site:latest 330028304648.dkr.ecr.ap-southeast-1.amazonaws.com/canlaw-site:latest
docker push 330028304648.dkr.ecr.ap-southeast-1.amazonaws.com/canlaw-site:latest
