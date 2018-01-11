#!/bin/sh

chown -R uwsgi:uwsgi /app

/usr/sbin/uwsgi \
--uid uwsgi --gid uwsgi \
--socket /app/sock/backend \
--master \
--plugin python3 \
--virtualenv .virtualenv \
--pythonpath /app/bin \
--mount /backend=wsgi_app:app \
--die-on-term \
--processes 4
