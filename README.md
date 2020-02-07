# todo-node-grpc

> An example Node.js (Typescript) gRPC microservice.

## Setup

**Docker**

```bash
docker-compose build
docker-compose up
```

**No Docker**

```bash
yarn
yarn start
```
## Development

#### Live reload

This project uses [remy/nodemon](https://github.com/remy/nodemon) for faster development.

Config file: `nodemon.json`

#### Protocol Buffers / gRPC

This project uses [grpc-node](https://github.com/grpc/grpc-node) with [Protocol Buffers](https://developers.google.com/protocol-buffers/docs/overview).

The protoc definition files are pre-compiled for efficiency using [grpc-tools](https://www.npmjs.com/package/grpc-tools) and [grpc_tools_node_protoc_ts](https://github.com/agreatfool/grpc_tools_node_protoc_ts) for the TypeScript `*.d.ts` files. See `package.json` for the exact commands used.

For better understanding of the implementation here, refer to the [Node.js gRPC Examples](https://github.com/grpc/grpc/blob/master/examples/node) and the [Node.js gRPC API Docs](https://grpc.github.io/grpc/node/index.html).

## Configuration

Environment variables are managed with [dotenv](https://github.com/motdotla/dotenv). To configure, create a `.env` file in the project root. For example:

```bash
HOST=0.0.0.0
PORT=8080
```

## Testing

Tests are written using [Mocha](https://mochajs.org/) and [Chai.js](https://www.chaijs.com/).

```bash
yarn test
```

## Code Quality

Think of future generations and do your bit now to keep the development environment clean.

```bash
yarn run lint
```

Linting is enforced using `eslint` and conforms to [eslint-config-airbnb-typescript](https://www.npmjs.com/package/eslint-config-airbnb-typescript). Yep, even the test files are linted.

Config file: `.eslintrc.json`
