import { Server, ServerCredentials } from 'grpc';
import { TodoService as TodoGgpcService } from '../gen/todo_grpc_pb';
import * as methods from './methods';

export interface Config {
  host?: string;
  port?: string;
  todoService: TodoService;
}

/**
 *  GRPCServer encapsulates the functionality of a gRPC Server.
 */
export default class GRPCServer {
  private server: Server;

  constructor({ host = '0.0.0.0', port = '8080' }: Config) {
    this.server = new Server();

    this.server.addService(TodoGgpcService, {
      getTodo: methods.get(),
      createTodo: methods.create(),
      updateTodo: methods.update(),
      deleteTodo: methods.remove(),
    });

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
