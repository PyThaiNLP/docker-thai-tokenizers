#!/bin/bash

REPO=thai-tokenisers
USER=heytitle
VENDOR=$1
TAG=$USER/$REPO:$VENDOR

docker tag $REPO:$VENDOR $TAG \
    && docker push $TAG \
    && echo "Pushed $TAG"