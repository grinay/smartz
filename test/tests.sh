#!/bin/sh
set -ex

SOCKET_UID="10000"

# frontend tests
sudo docker build -f docker/frontend/Dockerfile -t frontend:testing --build-arg NGINX_UID="$SOCKET_UID" .
sed -i "s/uid:\s.*$/uid: $SOCKET_UID/" docker/frontend/goss.yaml
GOSS_SLEEP=30 GOSS_FILES_PATH=docker/frontend dgoss run frontend:testing

# backend tests
sudo docker build -f docker/backend/Dockerfile -t backend:testing --build-arg UWSGI_UID="$SOCKET_UID" .
sed -i "s/uid:\s.*$/uid: $SOCKET_UID/" docker/backend/goss.yaml
GOSS_SLEEP=30 GOSS_FILES_PATH=docker/backend dgoss run backend:testing

# integration tests
sudo docker-compose build
sudo docker-compose up -d
sleep 60
curl http://127.0.0.1:8000
sudo docker-compose down
