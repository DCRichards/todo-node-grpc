import 'mocha';
import GRPCServer from '../src/server';
import Postgres from '../src/persistence/postgres';
import TodoService from '../src/services/TodoService';

const {
  NODE_ENV,
  HOST,
  PORT,
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
} = process.env;

if (NODE_ENV !== 'test') {
  throw new Error('Warning: your tests may not be running against a test environment. Please set NODE_ENV=test');
}
if (!POSTGRES_HOST) {
  throw new Error('Invalid environment: You must specify POSTGRES_HOST');
}
if (!POSTGRES_PORT) {
  throw new Error('Invalid environment: You must specify POSTGRES_PORT');
}
if (!POSTGRES_DB) {
  throw new Error('Invalid environment: You must specify POSTGRES_DB');
}
if (!POSTGRES_USER) {
  throw new Error('Invalid environment: You must specify POSTGRES_USER');
}
if (!POSTGRES_PASSWORD) {
  throw new Error('Invalid environment: You must specify POSTGRES_PASSWORD');
}

const db = new Postgres({
  host: POSTGRES_HOST,
  port: Number.parseInt(POSTGRES_PORT, 10),
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
});

const todoService = new TodoService(db);
const server = new GRPCServer({
  host: HOST,
  port: PORT,
  todoService,
});

before(() => {
  server.start();
});

after(() => {
  server.stop();
});
