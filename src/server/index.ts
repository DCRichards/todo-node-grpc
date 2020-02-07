import { Server, ServerCredentials } from 'grpc';
import { TodoService } from '../gen/todo_grpc_pb';
import * as service from './methods';

interface Config {
  host?: string;
  port?: string;
}

/**
 *  GRPCServer encapsulates the functionality of a gRPC Server.
 */
export default class GRPCServer {
  protected readonly server: Server;

  constructor({ host = '0.0.0.0', port = '8080' }: Config) {
    this.server = new Server();
    this.server.addService(TodoService, service);
    this.server.bind(`${host}:${port}`, ServerCredentials.createInsecure());
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
