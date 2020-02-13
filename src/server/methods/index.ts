import { ServerUnaryCall, sendUnaryData } from 'grpc';
import { CreateBody, TodoResponse } from '../../gen/todo_pb';

export type Call<T> = ServerUnaryCall<T>;
export type Callback<T> = sendUnaryData<T>;
export type Handler<T, U> = (call: Call<T>, cb: Callback<U>) => void;

export function get() : () => void {
  return () => {};
}

export function create() : Handler<CreateBody, TodoResponse> {
  return (call, cb) => {
    const req = call.request.toObject();

    if (!req.todo) {
      cb(new Error('You must specify a todo'), null);
      return;
    }

    if (!req.todo.title) {
      cb(new Error('You must specify a todo.title'), null);
      return;
    }

    const res = new TodoResponse();
    const todo = new TodoResponse.Todo();

    todo.setId('1');
    todo.setTitle(req.todo.title);
    todo.setCompleted(req.todo.completed);
    res.setTodo(todo);

    cb(null, res);
  };
}

export function update() : () => void {
  return () => {};
}

export function remove() : () => void {
  return () => {};
}
