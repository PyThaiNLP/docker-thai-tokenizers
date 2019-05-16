FROM debian:jessie-slim

ENV VERSION=0.6.1
ENV LD_LIBRARY_PATH=/usr/local/lib

#RUN apk add --no-cache bash curl tar libtool m4 autoconf make automake libltdl alpine-sdk
RUN apt-get update \
    && apt-get install -y curl build-essential pkg-config xz-utils

WORKDIR /app

RUN mkdir -p /tmp/libdatrie \
    && cd /tmp/libdatrie \
    && curl -L https://github.com/tlwg/libdatrie/releases/download/v0.2.12/libdatrie-0.2.12.tar.xz \
    | tar -xJ  --strip-components=1 \
    && ./configure && make && make install

RUN mkdir -p /tmp/swath \
    && cd /tmp/swath \
    && curl -L https://github.com/tlwg/swath/releases/download/v$VERSION/swath-$VERSION.tar.xz \
    | tar --strip-components=1 -xJ \
    && ./configure && make && make check && make install

COPY entry .

ENTRYPOINT [ "bash", "entry" ]