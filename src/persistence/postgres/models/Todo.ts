import {
  BuildOptions, DataTypes, Model, Sequelize,
} from 'sequelize';

export interface TodoModel {
  readonly id: number;
  title: string;
  completed: boolean;
}

export type TodoInstance = typeof Model & {
  new (values?: object, options?: BuildOptions): TodoModel;
};

export function init(instance: Sequelize): TodoInstance {
  return <TodoInstance>instance.define('todo', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT,
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    completed: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });
}
