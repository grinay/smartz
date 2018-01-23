FROM node:8-alpine AS node_stage

ARG BASIC_AUTH
RUN mkdir /nginx
RUN if [[ -n "$BASIC_AUTH" ]]; \
	then \
		apk -U add apache2-utils \
		&& htpasswd -bc /nginx/htpasswd mixbytes $BASIC_AUTH \
		&& echo -e 'auth_basic "Mixbytes staging zone";\nauth_basic_user_file htpasswd;' > /nginx/basic_auth.conf; \
	else \
		echo '' > /nginx/basic_auth.conf; \
    fi
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
COPY --from=node_stage /nginx /etc/nginx
COPY docker/frontend/nginx.conf /etc/nginx/conf.d/default.conf
RUN apk --no-cache --update upgrade \
&& apk add shadow \
&& usermod -u $NGINX_UID nginx
CMD [ "nginx-debug", "-g", "daemon off;" ]
