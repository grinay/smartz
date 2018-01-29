#!/bin/sh
set -ex

DELAY=30

# goss tests
GOSS_SLEEP=$DELAY GOSS_FILES_PATH=docker/frontend dgoss run smartz_frontend:latest
GOSS_SLEEP=$DELAY GOSS_FILES_PATH=docker/backend dgoss run smartz_backend:latest

# basic auth test
sudo docker run --rm -d -e 'BASIC_AUTH=testuser:$apr1$hsM7a2Sc$DtK6ldBKcOEAela2huaQq0' --name frontend  -p "3000:80" smartz_frontend:latest
sleep $DELAY
curl -s -o /dev/null -w "%{http_code}" --user testuser:testpassword http://127.0.0.1:3000 | grep -v 401
sudo docker stop frontend

# integration tests
sudo docker-compose up -d
sleep $DELAY
curl http://127.0.0.1:3000
curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:3000 | grep 200
docker-compose down
