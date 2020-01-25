FROM buildkite/puppeteer

WORKDIR /usr/src

# RUN pip install --upgrade pip && pip install cutkum tqdm

COPY vendors/chrome/vendor.js .
COPY vendors/chrome/entry .

ENTRYPOINT [ "bash", "entry"]
