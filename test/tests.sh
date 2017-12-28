#!/bin/sh
set -ex
#sudo docker build -t bitcoind:testing .
#sudo docker run -d -p 8332:8332 -p 8333:8333 -e RPCALLOWIP="0.0.0.0/0" -e RPCUSER=user -e RPCPASS=pass bitcoind:testing
sudo docker-compose build
sudo docker-compose up -d
sleep 60
curl http://127.0.0.1:8000

