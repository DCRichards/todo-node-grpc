import { config } from 'dotenv';
import GRPCServer from './server';
import Postgres from './persistence/Postgres';

config();

const { HOST, PORT, DB_CONNECTION_STRING } = process.env;
const db = new Postgres({ connectionString: DB_CONNECTION_STRING! });
const server = new GRPCServer({ host: HOST, port: PORT, db });

server.start();
