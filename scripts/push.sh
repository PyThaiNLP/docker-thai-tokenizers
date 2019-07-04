#!/bin/bash

REPO=word-tokenizers
USER=pythainlp
VENDOR=$1
TAG=$USER/$REPO:$VENDOR

./scripts/build.sh $VENDOR \
    && docker tag $REPO:$VENDOR $TAG \
    && docker push $TAG \
    && echo "Pushed $TAG"