#!/bin/sh

case "$ENVIRONMENT" in
        dev)
                echo "environment: DEVELOPMENT"
                ln -sf /app/conf/nginx.conf-dev /etc/nginx/nginx.conf
                ;;
        stage)
                echo "environment: STAGE"
                ln -sf /app/conf/nginx.conf-prod /etc/nginx/nginx.conf
                ln -sf /app/conf/robots.txt-stage /app/web_root/robots.txt
                ;;
        prod)
                echo "  environment: PRODUCTION"
                ln -sf /app/conf/nginx.conf-prod /etc/nginx/nginx.conf
                ln -sf /app/conf/robots.txt-prod /app/web_root/robots.txt
                ;;
        *)
                echo "Please define environment with ENVIRONMENT variable(dev, stage, prod)!"
                exit 1
                ;;
esac

exec nginx-debug -g "daemon off;"
