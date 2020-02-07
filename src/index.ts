import dotenv from 'dotenv';
import GRPCServer from './server';

dotenv.config();

const { HOST, PORT } = process.env;
const server = new GRPCServer({ host: HOST, port: PORT });

server.start();
