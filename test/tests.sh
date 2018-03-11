#!/bin/sh
set -ex

DELAY=30

# goss tests
GOSS_SLEEP=$DELAY GOSS_FILES_PATH=docker/frontend dgoss run smartzplatform_frontend:latest
GOSS_SLEEP=$DELAY GOSS_FILES_PATH=docker/backend dgoss run smartzplatform_backend:latest

# integration tests
sudo docker-compose up -d
sleep $DELAY
curl http://127.0.0.1:3000
curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:3000 | grep 200
