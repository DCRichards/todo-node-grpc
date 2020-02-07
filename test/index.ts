import 'mocha';
import dotenv from 'dotenv';
import server from '../src';

dotenv.config();

before(() => {
  server.start();
});

after(() => {
  server.forceShutdown();
});
