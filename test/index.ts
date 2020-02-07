import 'mocha';
import dotenv from 'dotenv';
import GRPCServer from '../src/server';
import Postgres from '../src/persistence/Postgres';

dotenv.config();

const { HOST, PORT, DB_CONNECTION_STRING } = process.env;
const db = new Postgres({ connectionString: DB_CONNECTION_STRING! });
const server = new GRPCServer({ host: HOST, port: PORT, db });

before(() => {
  server.start();
});

after(() => {
  server.stop();
});
