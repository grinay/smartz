FROM node:8-alpine

WORKDIR /app
RUN apk --no-cache --update upgrade \
&& apk --no-cache add git python3 python3-dev g++ make bash \
&& npm install

VOLUME [ "/app" ]

EXPOSE 8000

CMD [ "/bin/bash" ]
