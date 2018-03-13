#!/bin/sh

case "$ENVIRONMENT" in
        dev)
                echo "environment: DEVELOPMENT"
                UWSGI_PROCESSES=1
                ;;
        stage)
                echo "environment: STAGE"
                UWSGI_PROCESSES=5
                ;;
        prod)
                echo "  environment: PRODUCTION"
                UWSGI_PROCESSES=5
                ;;
        *)
                echo "Please define environment with ENVIRONMENT variable(dev, stage, prod)!"
                exit 1
                ;;
esac

chown -R uwsgi:uwsgi /app

exec /usr/sbin/uwsgi \
--uid uwsgi --gid uwsgi \
--socket /app/sock/backend \
--master \
--plugin python3 \
--virtualenv .virtualenv \
--pythonpath /app/bin \
--mount /backend=wsgi_app:app \
--die-on-term \
--processes "$UWSGI_PROCESSES" \
--chmod-socket=666