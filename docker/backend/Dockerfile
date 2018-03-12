FROM alpine:latest AS solc_stage
# https://solidity.readthedocs.io/en/latest/installing-solidity.html#building-from-source
RUN apk --no-cache --update upgrade && apk --no-cache add git bash
WORKDIR /tmp
RUN git clone --recursive https://github.com/ethereum/solidity.git
WORKDIR /tmp/solidity
RUN git checkout v0.4.20
RUN git submodule update --init --recursive
RUN ./scripts/install_deps.sh
RUN ./scripts/build.sh
RUN /usr/local/bin/solc --version

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
