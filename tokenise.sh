#!/bin/bash

VE=$1
INPUT=$2

VENDOR=$(echo "$VE" | sed 's/:.*$//')
METHOD=$(echo "$VE" | sed 's/^.*://')
echo "Tokenising $INPUT using vendor=$VENDOR and method=$METHOD"

CMD="docker run -v `pwd`/data:/data  thai-tokeniser:$VENDOR $METHOD $INPUT"

echo "CMD: $CMD"

time $CMD