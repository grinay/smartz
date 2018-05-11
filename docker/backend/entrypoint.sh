#!/bin/sh


case "$ENVIRONMENT" in
        dev)
                echo "environment: DEVELOPMENT"
                UWSGI_PROCESSES=1
                DJANGO_CONFIGURATION=Development
                ;;
        stage)
                echo "environment: STAGE"
                UWSGI_PROCESSES=5
                DJANGO_CONFIGURATION=Staging
                ;;
        prod)
                echo "  environment: PRODUCTION"
                UWSGI_PROCESSES=5
                DJANGO_CONFIGURATION=Production
                ;;
        *)
                echo "Please define environment with ENVIRONMENT variable(dev, stage, prod)!"
                exit 1
                ;;
esac

source .venv/bin/activate
python manage.py collectstatic --noinput --clear

chown -R uwsgi:uwsgi /app

exec /usr/sbin/uwsgi \
--uid uwsgi --gid uwsgi \
--socket /app/sock/backend \
--chmod-socket=666 \
--master \
--plugin python3 \
--die-on-term \
--processes "$UWSGI_PROCESSES" \
--chdir=/app \
--module=smartzcore.wsgi \
--home=/app/.venv \
--env DJANGO_SETTINGS_MODULE=smartzcore.settings \
--env DJANGO_CONFIGURATION=$DJANGO_CONFIGURATION
