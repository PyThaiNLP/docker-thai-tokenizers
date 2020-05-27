FROM fnndsc/ubuntu-python3

WORKDIR /usr/src

RUN apt-get update  && apt-get install -y locales
RUN locale-gen en_US.UTF-8
ENV LC_ALL "en_US.UTF-8"

RUN pip install --upgrade pip && pip install tltk matplotlib

COPY vendor.py .
COPY entry .

ENTRYPOINT [ "bash", "entry" ]
