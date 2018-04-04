FROM alpine:3.7 AS python_stage
WORKDIR /build
RUN apk --no-cache --update upgrade \
&& apk --no-cache add python3 python3-dev g++ make
RUN pip3 install pipenv
COPY backend/Pipfile .
COPY backend/Pipfile.lock .
ENV PIPENV_VENV_IN_PROJECT=1
RUN pipenv --three install

COPY backend/smartz/ smartz/
COPY backend/apps/ apps/
COPY backend/pythonlib/ pythonlib/
COPY backend/utils/ utils/
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
COPY --from=python_stage /build/ .
COPY docker/backend/entrypoint.sh .
CMD [ "/bin/sh", "entrypoint.sh" ]
