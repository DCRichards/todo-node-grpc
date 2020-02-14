import { ServerUnaryCall, sendUnaryData } from 'grpc';
import { CreateTodoRequest, CreateTodoResponse, Todo } from '../../gen/todo_pb';

export type Call<T> = ServerUnaryCall<T>;
export type Callback<T> = sendUnaryData<T>;
export type Handler<T, U> = (call: Call<T>, cb: Callback<U>) => void;

export function listTodos() : () => void {
  return () => {};
}

export function getTodoById() : () => void {
  return () => {};
}

export function createTodo() : Handler<CreateTodoRequest, CreateTodoResponse> {
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

    const res = new CreateTodoResponse();
    const todo = new Todo();

    todo.setId('1');
    todo.setTitle(req.todo.title);
    todo.setCompleted(req.todo.completed);
    res.setTodo(todo);

    cb(null, res);
  };
}

export function updateTodo() : () => void {
  return () => {};
}

export function deleteTodo() : () => void {
  return () => {};
}
