import dotenv from 'dotenv';
import { Server, ServerCredentials } from 'grpc';
import { TodoService } from './gen/todo_grpc_pb';
import * as methods from './methods';

dotenv.config();

const { HOST, PORT } = process.env;
const server = new Server();

server.addService(TodoService, methods);
server.bind(`${HOST}:${PORT}`, ServerCredentials.createInsecure());

if (require.main === module) {
  server.start();
  console.log(`Server running on ${HOST}:${PORT}...`);
}

export default server;
