FROM node:8.10.0-alpine AS node_stage
WORKDIR /static
COPY front .
RUN npm i
ENV NODE_PATH=src
RUN npm run build
COPY json-schema/public/ build/json-schema/public/

FROM nginx:1.12.2-alpine
LABEL maintainer=smartz.io
#---labels-will-be-here---
WORKDIR /app
VOLUME [ "/app/sock" ]
EXPOSE 80
RUN apk --no-cache --update upgrade
COPY --from=node_stage /static/build/ web_root/
COPY docker/frontend/entrypoint.sh .
COPY docker/frontend/conf/ conf/
CMD [ "/bin/sh", "entrypoint.sh" ]
