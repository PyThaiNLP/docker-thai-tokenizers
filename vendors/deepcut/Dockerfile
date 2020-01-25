FROM tensorflow/tensorflow:2.1.0-py3

WORKDIR /usr/src

RUN pip install --upgrade pip && pip install deepcut tqdm

COPY vendor.py .
COPY entry .

ENTRYPOINT [ "bash", "entry"]
