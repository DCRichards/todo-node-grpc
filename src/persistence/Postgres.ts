import { Sequelize } from 'sequelize';
import Persistence from '.';

interface Config {
  connectionString: string;
}

export default class Postgres extends Persistence {
  private db: Sequelize;

  constructor({ connectionString }: Config) {
    super();
    this.db = new Sequelize(connectionString);
  }

  async connect(): Promise<void> {
    return this.db.authenticate();
  }

  async disconnect(): Promise<void> {
    return this.db.close();
  }
}
