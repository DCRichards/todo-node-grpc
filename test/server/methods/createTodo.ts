import 'mocha';
import { assert, expect } from 'chai';
import { credentials } from 'grpc';
import { TodoServiceClient } from '../../../src/gen/todo_grpc_pb';
import { CreateTodoRequest, CreateTodoResponse, Todo } from '../../../src/gen/todo_pb';

/**
 * Wrapper function to allow us to get a typed response as well as use await.
 * See {@link https://github.com/microsoft/TypeScript/issues/26048} for details.
 */
function createTodo(body: CreateTodoRequest): Promise<CreateTodoResponse> {
  const { HOST, PORT } = process.env;
  const client = new TodoServiceClient(`${HOST}:${PORT}`, credentials.createInsecure());

  return new Promise((resolve, reject) => {
    client.createTodo(body, (err, res: CreateTodoResponse) => {
      if (err) {
        return reject(err);
      }

      return resolve(res);
    });
  });
}

describe('createTodo()', () => {
  it('Should successfully create a todo', async () => {
    const title = 'Get the milk!';

    const req = new CreateTodoRequest();
    const t = new Todo();
    t.setTitle(title);
    t.setCompleted(true);
    req.setTodo(t);

    const res = await createTodo(req);
    const todo = res.getTodo();

    expect(todo).to.exist;
    expect(todo!.getTitle()).to.equal(title);
    expect(todo!.getCompleted()).to.equal(true);
    expect(todo!.getId()).to.exist;
  });

  it('Should fail if todo is omitted', async () => {
    try {
      await createTodo(new CreateTodoRequest());
      assert.fail('Expected createTodo to fail');
    } catch (error) {
      expect(error).to.be.an('error');
    }
  });

  it('Should fail if todo.title is omitted', async () => {
    const req = new CreateTodoRequest();
    req.setTodo(new Todo());

    try {
      await createTodo(req);
      assert.fail('Expected createTodo to fail');
    } catch (error) {
      expect(error).to.be.an('error');
    }
  });
});
