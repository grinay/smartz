#!/bin/sh

read -p "Verstion: $1 Confirm version number here: " -r
echo

if [[ $REPLY = $1 ]]
then
        docker build --build-arg NGINX_UID="10000" -f docker/production/frontend/Dockerfile -t smartz_frontend:$1 .
        docker tag smartz_frontend:$1 smartz_frontend:latest

        docker build --build-arg UWSGI_UID="10000" -f docker/production/backend/Dockerfile -t smartz_backend:$1 .
        docker tag smartz_backend:$1 smartz_backend:latest
else
        echo 'Cancelled'
fi
