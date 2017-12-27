FROM node:8-alpine AS node_stage
WORKDIR /static
COPY front .
RUN npm install --only=production
RUN npm run build --production

FROM nginx:alpine
WORKDIR /app
EXPOSE 80
COPY --from=node_stage /static/build .
COPY docker/frontend/nginx.conf /etc/nginx/conf.d/frontend.conf
RUN apk --no-cache --update upgrade \
&& rm -f /etc/nginx/conf.d/default.conf
CMD [ "nginx-debug", "-g", "daemon off;" ]
