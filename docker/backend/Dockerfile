FROM node:8-alpine AS node_stage
WORKDIR /build
COPY package.json .
# add here package-lock, shrink
RUN npm install --only=production

FROM alpine:latest AS python_stage
WORKDIR /build
RUN apk --no-cache --update upgrade \
&& apk --no-cache add python3 python3-dev g++ make
COPY requirements.txt .
RUN python3 -m venv .virtualenv
RUN ./.virtualenv/bin/pip3 install -r requirements.txt --no-cache-dir

FROM alpine:latest
ARG UWSGI_UID
WORKDIR /app
VOLUME [ "/app/sock" ]
VOLUME [ "/app/data" ]
RUN adduser -u $UWSGI_UID -S -H uwsgi \
&& apk --no-cache --update upgrade \
&& apk --no-cache add nodejs python3 uwsgi uwsgi-python3
COPY --from=node_stage /build/node_modules node_modules
COPY --from=python_stage /build/.virtualenv .virtualenv
COPY docker/backend/entrypoint.sh .
COPY . .

#CMD [ "/bin/sh" ]
ENTRYPOINT [ "./entrypoint.sh" ]
