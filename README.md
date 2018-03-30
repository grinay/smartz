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

## containerized DB backup/restore

mongo service should be up before backup/restore (docker-compose up)

### Dump all databases to ./backupdb/$currentdate folder:
```
docker-compose -f db-backup.yml run mongo_dump
```
### Restore dump from ./restoredb folder:
```
docker-compose -f db-backup.yml run mongo_restore
```
### Dump-restore DB on stage/prod server
```
docker-compose -f db-backup.yml -p smartzplatform run mongo_dump
docker-compose -f db-backup.yml -p smartzplatform run mongo_restore
```
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
