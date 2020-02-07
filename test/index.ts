import 'mocha';
import dotenv from 'dotenv';
import GRPCServer from '../src/server';

dotenv.config();

const { HOST, PORT } = process.env;
const server = new GRPCServer({ host: HOST, port: PORT });

before(() => {
  server.start();
});

after(() => {
  server.stop();
});
