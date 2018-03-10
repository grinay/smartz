FROM node:8-alpine AS node_stage

WORKDIR /static
COPY front .
RUN npm install --only=production
RUN npm run build --production
RUN mkdir build/buildinfo \
	&& if [[ -f buildinfo.txt ]]; then cp buildinfo.txt build/buildinfo/index.html; \
				      else echo "Local build" > build/buildinfo/index.html; \
	fi

FROM nginx:alpine
ARG NGINX_UID
WORKDIR /app
VOLUME [ "/app/sock" ]
EXPOSE 80

RUN mkdir web_root && mkdir -p web_root/static/json-schema/
COPY --from=node_stage /static/build web_root/
COPY docker/frontend/robots-staging.txt web_root/robots.txt
COPY json-schema/public/ web_root/static/json-schema/public/

COPY docker/frontend/nginx.conf /etc/nginx/nginx.conf
COPY docker/frontend/entrypoint.sh .
RUN apk --no-cache --update upgrade \
&& apk add shadow \
&& usermod -u $NGINX_UID nginx
CMD [ "./entrypoint.sh" ]
