import 'mocha';
import { assert, expect } from 'chai';
import { credentials } from 'grpc';
import { TodoClient } from '../../../src/gen/todo_grpc_pb';
import { CreateBody, TodoResponse } from '../../../src/gen/todo_pb';

/**
 * Wrapper function to allow us to get a typed response as well as use await.
 * See {@link https://github.com/microsoft/TypeScript/issues/26048} for details.
 */
function createTodo(body: CreateBody): Promise<TodoResponse> {
  const { HOST, PORT } = process.env;
  const client = new TodoClient(`${HOST}:${PORT}`, credentials.createInsecure());

  return new Promise((resolve, reject) => {
    client.createTodo(body, (err, res: TodoResponse) => {
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

    const body = new CreateBody();
    const t = new CreateBody.Todo();
    t.setTitle(title);
    t.setCompleted(true);
    body.setTodo(t);

    const res = await createTodo(body);
    const todo = res.getTodo();

    expect(todo).to.exist;
    expect(todo!.getTitle()).to.equal(title);
    expect(todo!.getCompleted()).to.equal(true);
    expect(todo!.getId()).to.exist;
  });

  it('Should fail if todo is omitted', async () => {
    try {
      await createTodo(new CreateBody());
      assert.fail('Expected createTodo to fail');
    } catch (error) {
      expect(error).to.be.an('error');
    }
  });

  it('Should fail if todo.title is omitted', async () => {
    const body = new CreateBody();
    body.setTodo(new CreateBody.Todo());

    try {
      await createTodo(body);
      assert.fail('Expected createTodo to fail');
    } catch (error) {
      expect(error).to.be.an('error');
    }
  });
});
