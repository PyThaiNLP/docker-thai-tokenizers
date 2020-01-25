FROM buildkite/puppeteer

WORKDIR /usr/src

# RUN pip install --upgrade pip && pip install cutkum tqdm

COPY vendors/deepcut/vendor.js .
COPY vendors/deepcut/entry .

ENTRYPOINT [ "bash", "entry"]
