FROM node:13

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . .

# Statically generate proto definitions and TypeScript declarations files.
RUN yarn protoc

CMD ["yarn", "start"]
