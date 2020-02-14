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

#### Protocol Buffers & gRPC

This project uses [grpc-node](https://github.com/grpc/grpc-node) with [Protocol Buffers](https://developers.google.com/protocol-buffers/docs/overview).

The protoc definition files are pre-compiled for efficiency using [grpc-tools](https://www.npmjs.com/package/grpc-tools) and [grpc_tools_node_protoc_ts](https://github.com/agreatfool/grpc_tools_node_protoc_ts) for the TypeScript `*.d.ts` files. See `package.json` for the exact commands used. For a better understanding of the implementation here, refer to the [Node.js gRPC Examples](https://github.com/grpc/grpc/blob/master/examples/node) and the [Node.js gRPC API Docs](https://grpc.github.io/grpc/node/index.html).

Protocol definitions and implementations do their best to adhere to the standards of Google and the community. We use the excellent [buf](https://buf.build/docs/introduction) tool to help enforce these. For more information see:

* [Google API Design](https://cloud.google.com/apis/design)
* [Protocol Buffers Style Guide](https://developers.google.com/protocol-buffers/docs/style)
* [Buf Style Guide](https://buf.build/docs/style-guide)

## Configuration

For Docker-based development, environment variables are managed with a `.env` file To configure, create a `.env` file in the project root. For example:

```bash
NODE_ENV=development
HOST=0.0.0.0
PORT=8000
POSTGRES_HOST=db
POSTGRES_PORT=5432
POSTGRES_DB=dev
POSTGRES_USER=dev
POSTGRES_PASSWORD=mysecurepass
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

### eslint

Code linting is enforced using `eslint` and conforms to [eslint-config-airbnb-typescript](https://www.npmjs.com/package/eslint-config-airbnb-typescript). Yep, even the test files are linted.

Config file: `.eslintrc.json`

### protobuf

Protobufs are also linted using the excellent [bufbuild/buf](https://buf.build/docs/introduction). All of the linting standards are enabled with the exception of `PACKAGE_DIRECTORY_MATCH` which isn't really needed for a microservice which manages its own `.proto` files.

Config file: `buf.yaml`
