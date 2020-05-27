FROM tensorflow/tensorflow:1.13.1-py3

WORKDIR /usr/src

RUN pip install --upgrade pip && pip install cutkum tqdm

COPY vendor.py .
COPY entry .

ENTRYPOINT [ "bash", "entry"]
