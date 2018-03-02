#!/bin/sh

AWS_REGISTRY=128894178443.dkr.ecr.eu-central-1.amazonaws.com
AWS_REGION=eu-central-1
TAG=latest
#TAG=version_1

CONTAINERS=( smartzplatform_frontend smartzplatform_backend )

for NAME in "${CONTAINERS[@]}"
do
        ecs-cli pull --ecs-profile registry_ro --region $AWS_REGION $AWS_REGISTRY/$NAME:$TAG
        docker tag $AWS_REGISTRY/$NAME:$TAG $NAME:$TAG
done

sudo systemctl restart smartzplatform.service
