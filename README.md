# Smartz

![](https://api.travis-ci.org/smartzplatform/smartz.svg)

Multi-chain smart contracts management system

https://smartz.io/

## Development

## Running local server
```
# run dependencies
# https://github.com/smartzplatform/constructor_call_service
# https://github.com/smartzplatform/eos_compilation_service

# change url of services in smartzplatform.env
# CONSTRUCTOR_CALL_SERVICE_URL=http://your_external_ip:5000/call
# EOS_COMPILATION_SERVICE_URL=http://your_external_ip:5001/compile

# run server
docker-compose build
docker-compose up [-d] [--build]

# migrations
docker exec -it smartz_backend /bin/sh
source .venv/bin/activate
python3 manage.py migrate

# stop server
docker-compose down
```
## Service variables (smartzplatform.env):

- ENVIRONMENT=dev
- CONSTRUCTOR_CALL_SERVICE_URL=http://service.host:port/call
- EOS_COMPILATION_SERVICE_URL=http://service.host:port/compile

**Container environment (dev, prod, stage)**
