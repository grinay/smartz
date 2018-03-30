FROM node:8.10.0-alpine AS node_stage
WORKDIR /build
COPY package.json .
RUN yarn install --production

FROM alpine:3.7 AS python_stage
WORKDIR /build
RUN apk --no-cache --update upgrade \
&& apk --no-cache add python3 python3-dev g++ make
COPY requirements.txt .
RUN python3 -m venv .virtualenv
RUN .virtualenv/bin/pip3 install -r requirements.txt --no-cache-dir
COPY bin/ bin/
COPY pythonlib/ pythonlib/
COPY constructor_engine/ constructor_engine/
COPY json-schema/ json-schema/
COPY constructor_examples/ constructor_examples/

FROM alpine:3.7
WORKDIR /app
VOLUME [ "/app/sock", "/app/data" ]
RUN apk --no-cache --update upgrade \
&& apk --no-cache add nodejs python3 uwsgi uwsgi-python3
ADD https://github.com/ethereum/solidity/releases/download/v0.4.20/solc-static-linux /usr/local/bin/solc
COPY --from=node_stage /build/node_modules/ node_modules/
COPY --from=python_stage /build/ .
COPY docker/backend/entrypoint.sh .
CMD [ "/bin/sh", "entrypoint.sh" ]