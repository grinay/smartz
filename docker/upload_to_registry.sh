#!/bin/bash

# simply script to upload builded containers to aws registry


AWS_REGISTRY=128894178443.dkr.ecr.eu-central-1.amazonaws.com
AWS_REGION=eu-central-1
VERSION="$TRAVIS_BUILD_NUMBER"
TAGS=( latest "version_$VERSION" )

for NAME in "$@"
do
	for TAG in "${TAGS[@]}"
	do
		echo $TAG
		docker tag $NAME:latest $AWS_REGISTRY/$NAME:$TAG
		ecs-cli push --region $AWS_REGION --ecs-profile travis $AWS_REGISTRY/$NAME:$TAG
	done
done
