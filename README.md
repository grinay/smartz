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

    docker-compose build

    docker-compose up [-d]

    docker-compose down

## containerized DB backup/restore

mongo service should be up before backup/restore (docker-compose up)

### Dump all databases to ./backupdb/$currentdate folder:

    docker-compose -f db-backup.yml run mongo_dump

### Restore dump from ./restoredb folder:

    docker-compose -f db-backup.yml run mongo_restore

## Staging

Travis CI builds staging version automatically from master branch after tests passed

### URL

https://staging.smartz.io

### Basic auth

mixbytes/cKdw9bD63YcHXbRrzfwk

### Build information

https://staging.smartz.io/buildinfo
