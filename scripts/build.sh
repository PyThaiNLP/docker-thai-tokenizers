#!/bin/bash
TMP_BUILD_DIR=tmp-build
VENDOR=$1

cp -R vendors/$VENDOR $TMP_BUILD_DIR/ 

read -r -d '' MAIN << EOM
#

### main.py ###
vendor="$VENDOR"
`cat main.py`
EOM

echo "$MAIN" >> $TMP_BUILD_DIR/vendor.py

cd $TMP_BUILD_DIR \
    && docker build -t thai-tokeniser:$VENDOR .

cd .. \
    && rm -rf $TMP_BUILD_DIR \
    && echo "Built and cleanup done!"