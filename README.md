# Smartz

![](https://travis-ci.com/mixbytes/smartz.svg?token=npMVUXhKXPw1Mau9yKyL&branch=master)

Multi-chain smart contracts management system

https://smartz.io/

## Development

## Running local server
```
docker-compose build
docker-compose up [-d] [--build]
docker exec -it smartz_backend /bin/sh
source .venv/bin/activate
python3 manage.py migrate

# stop server
docker-compose down
```
## Service variables (smartzplatform.env):

* ENVIRONMENT=dev

**Container environment (dev, prod, stage)**
