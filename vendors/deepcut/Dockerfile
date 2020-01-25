FROM tensorflow/tensorflow:2.1.0-py3

WORKDIR /usr/src

RUN pip install --upgrade pip && pip install deepcut tqdm

COPY vendors/deepcut/vendor.py .
COPY vendors/deepcut/entry .

ENTRYPOINT [ "bash", "entry"]
