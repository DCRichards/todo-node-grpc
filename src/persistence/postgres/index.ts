import { Sequelize } from 'sequelize';
import Persistence from '..';
import * as Todo from './models/Todo';

interface Config {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}

/**
 * A persitence instance backed by PostgreSQL.
 */
export default class Postgres extends Persistence {
  private db: Sequelize;

  private todo: Todo.TodoInstance;

  constructor(config: Config) {
    super();

    const {
      host, port, username, password, database,
    } = config;
    const dialect = 'postgres';
    this.db = new Sequelize(database, username, password, {
      host, port, dialect,
    });

    this.todo = Todo.init(this.db);
    this.db.sync();
  }

  async connect(): Promise<void> {
    return this.db.authenticate();
  }

  async disconnect(): Promise<void> {
    return this.db.close();
  }

  async getAll() : Promise<Todo.TodoModel> {
    return this.todo.findAll();
  }
}
