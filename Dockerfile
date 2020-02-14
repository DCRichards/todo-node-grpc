FROM node:13

WORKDIR /usr/src/app

# Install buf
RUN curl -sSL \
    "https://github.com/bufbuild/buf/releases/download/v0.7.0/buf-$(uname -s)-$(uname -m).tar.gz" | \
    tar -xvzf - -C /usr/local --strip-components 1

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . .

# Statically generate proto definitions and TypeScript declarations files.
RUN yarn protoc

CMD ["yarn", "start"]
