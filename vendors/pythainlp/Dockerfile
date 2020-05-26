FROM python:3.6.8-alpine3.9

WORKDIR /usr/src

RUN apk update && apk add build-base bash

RUN pip install --upgrade pip && pip install pythainlp==2.1.4

COPY vendors/pythainlp/vendor.py .
COPY vendors/pythainlp/entry .

ENTRYPOINT [ "bash", "entry"]
