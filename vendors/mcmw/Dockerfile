FROM anibali/pytorch:cuda-10.0

ENV COMMIT=680cf98

RUN git clone --depth 10 https://github.com/earthy123/Multi-Candidate-Word-Segmentation.git /app \
    && cd /app \
    && git checkout  $COMMIT

WORKDIR /app

RUN pip install --upgrade pip && pip install numpy

COPY artifact/* /app/
COPY vendor.py .
COPY entry .

# ENTRYPOINT [ "bash", "entry"]