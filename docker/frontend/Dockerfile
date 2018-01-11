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
COPY docker/frontend/nginx.conf /etc/nginx/conf.d/default.conf
RUN apk --no-cache --update upgrade \
&& apk add shadow \
&& usermod -u $NGINX_UID nginx
CMD [ "nginx-debug", "-g", "daemon off;" ]
