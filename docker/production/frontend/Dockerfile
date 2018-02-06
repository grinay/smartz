FROM node:8-alpine AS node_stage

WORKDIR /static
COPY front .
RUN npm install --only=production
RUN npm run build --production

FROM nginx:alpine
ARG NGINX_UID
WORKDIR /app
VOLUME [ "/app/sock" ]
EXPOSE 80
COPY --from=node_stage /static/build .
COPY docker/production/frontend/robots.txt robots.txt
COPY docker/production/frontend/nginx.conf /etc/nginx/nginx.conf
COPY docker/production/frontend/entrypoint.sh .
RUN apk --no-cache --update upgrade \
&& apk add shadow \
&& usermod -u $NGINX_UID nginx
CMD [ "./entrypoint.sh" ]
