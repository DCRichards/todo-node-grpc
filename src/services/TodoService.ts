import Persistence from '../persistence';

export interface Todo {
  id?: number;
  title: string;
  completed: boolean;
}

/* eslint-disable */
export default class TodoService {
  private db: Persistence;

  constructor(db: Persistence) {
    this.db = db;
  }

  /**
   * Get a todo by its ID.
   *
   * @param id The todo ID to retrieve.
   */
  getById(id: number) : Promise<Todo | void> {
    this.db;
    return Promise.resolve();
  }

  /**
   * Create a new todo item.
   *
   * @param todo The todo to create.
   */
  create(todo: Todo) : Promise<Todo | void> {
    return Promise.resolve();
  }

  /**
   * Update an existing todo.
   *
   * @param todo The updated todo.
   */
  update(todo: Todo) : Promise<Todo | void> {
    return Promise.resolve();
  }

  /**
   * Delete an existing todo.
   *
   * @param id The ID of the todo to delete.
   */
  delete(id: number) : Promise<void> {
    return Promise.resolve();
  }
}
