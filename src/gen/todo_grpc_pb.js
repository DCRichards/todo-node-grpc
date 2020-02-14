// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var todo_pb = require('./todo_pb.js');

function serialize_todo_v1_CreateTodoRequest(arg) {
  if (!(arg instanceof todo_pb.CreateTodoRequest)) {
    throw new Error('Expected argument of type todo.v1.CreateTodoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_v1_CreateTodoRequest(buffer_arg) {
  return todo_pb.CreateTodoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_v1_CreateTodoResponse(arg) {
  if (!(arg instanceof todo_pb.CreateTodoResponse)) {
    throw new Error('Expected argument of type todo.v1.CreateTodoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_v1_CreateTodoResponse(buffer_arg) {
  return todo_pb.CreateTodoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_v1_DeleteTodoRequest(arg) {
  if (!(arg instanceof todo_pb.DeleteTodoRequest)) {
    throw new Error('Expected argument of type todo.v1.DeleteTodoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_v1_DeleteTodoRequest(buffer_arg) {
  return todo_pb.DeleteTodoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_v1_DeleteTodoResponse(arg) {
  if (!(arg instanceof todo_pb.DeleteTodoResponse)) {
    throw new Error('Expected argument of type todo.v1.DeleteTodoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_v1_DeleteTodoResponse(buffer_arg) {
  return todo_pb.DeleteTodoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_v1_GetTodoByIdRequest(arg) {
  if (!(arg instanceof todo_pb.GetTodoByIdRequest)) {
    throw new Error('Expected argument of type todo.v1.GetTodoByIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_v1_GetTodoByIdRequest(buffer_arg) {
  return todo_pb.GetTodoByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_v1_GetTodoByIdResponse(arg) {
  if (!(arg instanceof todo_pb.GetTodoByIdResponse)) {
    throw new Error('Expected argument of type todo.v1.GetTodoByIdResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_v1_GetTodoByIdResponse(buffer_arg) {
  return todo_pb.GetTodoByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_v1_ListTodosRequest(arg) {
  if (!(arg instanceof todo_pb.ListTodosRequest)) {
    throw new Error('Expected argument of type todo.v1.ListTodosRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_v1_ListTodosRequest(buffer_arg) {
  return todo_pb.ListTodosRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_v1_ListTodosResponse(arg) {
  if (!(arg instanceof todo_pb.ListTodosResponse)) {
    throw new Error('Expected argument of type todo.v1.ListTodosResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_v1_ListTodosResponse(buffer_arg) {
  return todo_pb.ListTodosResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_v1_UpdateTodoRequest(arg) {
  if (!(arg instanceof todo_pb.UpdateTodoRequest)) {
    throw new Error('Expected argument of type todo.v1.UpdateTodoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_v1_UpdateTodoRequest(buffer_arg) {
  return todo_pb.UpdateTodoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_v1_UpdateTodoResponse(arg) {
  if (!(arg instanceof todo_pb.UpdateTodoResponse)) {
    throw new Error('Expected argument of type todo.v1.UpdateTodoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_v1_UpdateTodoResponse(buffer_arg) {
  return todo_pb.UpdateTodoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TodoServiceService = exports.TodoServiceService = {
  // ListTodos follows the standard pagination recommended in
// https://cloud.google.com/apis/design/design_patterns#list_pagination
listTodos: {
    path: '/todo.v1.TodoService/ListTodos',
    requestStream: false,
    responseStream: false,
    requestType: todo_pb.ListTodosRequest,
    responseType: todo_pb.ListTodosResponse,
    requestSerialize: serialize_todo_v1_ListTodosRequest,
    requestDeserialize: deserialize_todo_v1_ListTodosRequest,
    responseSerialize: serialize_todo_v1_ListTodosResponse,
    responseDeserialize: deserialize_todo_v1_ListTodosResponse,
  },
  getTodoById: {
    path: '/todo.v1.TodoService/GetTodoById',
    requestStream: false,
    responseStream: false,
    requestType: todo_pb.GetTodoByIdRequest,
    responseType: todo_pb.GetTodoByIdResponse,
    requestSerialize: serialize_todo_v1_GetTodoByIdRequest,
    requestDeserialize: deserialize_todo_v1_GetTodoByIdRequest,
    responseSerialize: serialize_todo_v1_GetTodoByIdResponse,
    responseDeserialize: deserialize_todo_v1_GetTodoByIdResponse,
  },
  createTodo: {
    path: '/todo.v1.TodoService/CreateTodo',
    requestStream: false,
    responseStream: false,
    requestType: todo_pb.CreateTodoRequest,
    responseType: todo_pb.CreateTodoResponse,
    requestSerialize: serialize_todo_v1_CreateTodoRequest,
    requestDeserialize: deserialize_todo_v1_CreateTodoRequest,
    responseSerialize: serialize_todo_v1_CreateTodoResponse,
    responseDeserialize: deserialize_todo_v1_CreateTodoResponse,
  },
  updateTodo: {
    path: '/todo.v1.TodoService/UpdateTodo',
    requestStream: false,
    responseStream: false,
    requestType: todo_pb.UpdateTodoRequest,
    responseType: todo_pb.UpdateTodoResponse,
    requestSerialize: serialize_todo_v1_UpdateTodoRequest,
    requestDeserialize: deserialize_todo_v1_UpdateTodoRequest,
    responseSerialize: serialize_todo_v1_UpdateTodoResponse,
    responseDeserialize: deserialize_todo_v1_UpdateTodoResponse,
  },
  deleteTodo: {
    path: '/todo.v1.TodoService/DeleteTodo',
    requestStream: false,
    responseStream: false,
    requestType: todo_pb.DeleteTodoRequest,
    responseType: todo_pb.DeleteTodoResponse,
    requestSerialize: serialize_todo_v1_DeleteTodoRequest,
    requestDeserialize: deserialize_todo_v1_DeleteTodoRequest,
    responseSerialize: serialize_todo_v1_DeleteTodoResponse,
    responseDeserialize: deserialize_todo_v1_DeleteTodoResponse,
  },
};

exports.TodoServiceClient = grpc.makeGenericClientConstructor(TodoServiceService);
