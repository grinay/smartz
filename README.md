# Smartz

![](https://travis-ci.com/mixbytes/smartz.svg?token=npMVUXhKXPw1Mau9yKyL&branch=master)

Smart contract constructors marketplace.

## Development

### Install deps

    pip3 install -r requirements-dev.txt

### Test

    # Backend tests
    pytest

## Docker-compose commands
```
docker-compose build
docker-compose up [-d] [--build]
docker-compose down
```
## Service variables (smartzplatform.env):

* ENVIRONMENT=dev

**Container environment (dev, prod, stage)**


### [Stage URL](https://staging.smartz.io)

## Update service (stage, prod)

setup ECS profile in ~/.ecs directory
```
sudo cp -r /root/.ecs .
sudo chown -R $USER .ecs/
git clone https://github.com/mixbytes/smartz
```
```
sh deploy.sh latest|branch_master|commit_xxxxxxx|-i|--info
```
