FROM node:8.10.0-alpine AS node_stage
WORKDIR /build
COPY package.json .
RUN yarn install --production

FROM alpine:3.7 AS python_stage
WORKDIR /build
RUN apk --no-cache --update upgrade \
&& apk --no-cache add python3 python3-dev g++ make
COPY backend/requirements.txt .
RUN python3 -m venv .virtualenv
RUN .virtualenv/bin/pip3 install -r requirements.txt --no-cache-dir
COPY backend/bin/ bin/
COPY backend/pythonlib/ pythonlib/
COPY backend/constructor_engine/ constructor_engine/
COPY backend/constructor_examples/ constructor_examples/
COPY json-schema/ json-schema/

FROM alpine:3.7
LABEL maintainer=smartz.io
#---labels-will-be-here---
WORKDIR /app
VOLUME [ "/app/sock", "/app/data" ]
RUN apk --no-cache --update upgrade \
&& apk --no-cache add nodejs python3 uwsgi uwsgi-python3
ADD https://github.com/ethereum/solidity/releases/download/v0.4.20/solc-static-linux /usr/local/bin/solc
RUN chmod 755 /usr/local/bin/solc
COPY --from=node_stage /build/node_modules/ node_modules/
COPY --from=python_stage /build/ .
COPY docker/backend/entrypoint.sh .
CMD [ "/bin/sh", "entrypoint.sh" ]
