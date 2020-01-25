FROM tensorflow/tensorflow:1.13.1-py3

WORKDIR /usr/src

RUN apt-get update && apt-get install -y wget unzip

ENV GIT_URL="https://github.com/sertiscorp/thai-word-segmentation/archive/master.zip"

ADD $GIT_URL /tmp/

RUN cd /tmp \
    && unzip "master.zip" \
    && cd "thai-word-segmentation-master" \
    && cp -r . /usr/src/

RUN pip install --upgrade pip \
    && pip install tqdm \
    && pip install -r requirements.txt

COPY vendors/sertis/vendor.py .
COPY vendors/sertis/entry .

ENTRYPOINT [ "bash", "entry"]
