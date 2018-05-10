FROM alpine:3.7 AS python_stage
WORKDIR /build
RUN apk --no-cache --update upgrade \
&& apk --no-cache add python3 python3-dev g++ make
RUN apk add --virtual .build-deps gcc python3-dev musl-dev postgresql-dev
RUN pip3 install pipenv
COPY backend/Pipfile .
COPY backend/Pipfile.lock .
ENV PIPENV_VENV_IN_PROJECT=1
RUN pipenv --three install

COPY backend/smartzcore/ smartzcore/
COPY backend/apps/ apps/
COPY backend/pythonlib/ pythonlib/
COPY backend/utils/ utils/
COPY backend/constructor_engine/ constructor_engine/
COPY backend/constructor_examples/ constructor_examples/
COPY backend/manage.py manage.py
COPY docker/backend/entrypoint.sh .


FROM alpine:3.7
LABEL maintainer=smartz.io
#---labels-will-be-here---
WORKDIR /app
VOLUME [ "/app/sock", "/app/data" ]
ADD https://github.com/ethereum/solidity/releases/download/v0.4.20/solc-static-linux /usr/local/bin/solc
RUN apk --no-cache --update upgrade \
&& apk --no-cache add nodejs python3 uwsgi uwsgi-python3 postgresql \
&& chmod 755 /usr/local/bin/solc
COPY --from=python_stage /build/ .
COPY json-schema/ /json-schema
CMD [ "/bin/sh", "entrypoint.sh" ]
