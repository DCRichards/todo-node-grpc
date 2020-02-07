import { ServerUnaryCall, sendUnaryData } from 'grpc';
import { CreateBody, TodoResponse } from '../../gen/todo_pb';

export function createTodo(
  call: ServerUnaryCall<CreateBody>,
  cb: sendUnaryData<TodoResponse>,
) : void {
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
}

export function getTodo() : void {}

export function updateTodo() : void {}

export function deleteTodo() : void {}
