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

chown -R uwsgi:uwsgi /app

# https://uwsgi.readthedocs.io/en/latest/tutorials/Django_and_nginx.html
# https://docs.djangoproject.com/en/2.0/howto/deployment/wsgi/uwsgi/
exec /usr/sbin/uwsgi \
--uid uwsgi --gid uwsgi \
--socket /app/sock/backend \
--chmod-socket=666 \
--master \
--plugin python3 \
--pythonpath /app/bin \
--die-on-term \
--processes "$UWSGI_PROCESSES" \
--chdir=/app \
--module=smartz.wsgi \
--home=/app/.venv \
--env DJANGO_SETTINGS_MODULE=smartz.settings \
--env DJANGO_CONFIGURATION=$DJANGO_CONFIGURATION
