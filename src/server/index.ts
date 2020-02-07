import { Server, ServerCredentials } from 'grpc';
import { TodoService } from '../gen/todo_grpc_pb';
import Persistence from '../persistence';
import * as service from './methods';

interface Config {
  host?: string;
  port?: string;
  db: Persistence;
}

/**
 *  GRPCServer encapsulates the functionality of a gRPC Server.
 */
export default class GRPCServer {
  private server: Server;

  private db: Persistence;

  constructor({ host = '0.0.0.0', port = '8080', db }: Config) {
    this.server = new Server();
    this.server.addService(TodoService, service);
    this.server.bind(`${host}:${port}`, ServerCredentials.createInsecure());
    this.db = db;
  }

  /**
   *  Start the server.
   */
  start(): void {
    this.server.start();
  }

  /**
   * Stop the server, immediately terminating all connections.
   */
  stop(): void {
    this.server.forceShutdown();
  }
}
