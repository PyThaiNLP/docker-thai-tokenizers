FROM buildkite/puppeteer

WORKDIR /usr/src

# RUN pip install --upgrade pip && pip install cutkum tqdm

COPY vendor.js .
COPY entry .

ENTRYPOINT [ "bash", "entry"]
