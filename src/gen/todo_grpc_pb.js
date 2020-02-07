// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var todo_pb = require('./todo_pb.js');

function serialize_todo_CreateBody(arg) {
  if (!(arg instanceof todo_pb.CreateBody)) {
    throw new Error('Expected argument of type todo.CreateBody');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_CreateBody(buffer_arg) {
  return todo_pb.CreateBody.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_Empty(arg) {
  if (!(arg instanceof todo_pb.Empty)) {
    throw new Error('Expected argument of type todo.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_Empty(buffer_arg) {
  return todo_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_QueryBody(arg) {
  if (!(arg instanceof todo_pb.QueryBody)) {
    throw new Error('Expected argument of type todo.QueryBody');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_QueryBody(buffer_arg) {
  return todo_pb.QueryBody.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_TodoResponse(arg) {
  if (!(arg instanceof todo_pb.TodoResponse)) {
    throw new Error('Expected argument of type todo.TodoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_TodoResponse(buffer_arg) {
  return todo_pb.TodoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_UpdateBody(arg) {
  if (!(arg instanceof todo_pb.UpdateBody)) {
    throw new Error('Expected argument of type todo.UpdateBody');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_UpdateBody(buffer_arg) {
  return todo_pb.UpdateBody.deserializeBinary(new Uint8Array(buffer_arg));
}


var TodoService = exports.TodoService = {
  createTodo: {
    path: '/todo.Todo/CreateTodo',
    requestStream: false,
    responseStream: false,
    requestType: todo_pb.CreateBody,
    responseType: todo_pb.TodoResponse,
    requestSerialize: serialize_todo_CreateBody,
    requestDeserialize: deserialize_todo_CreateBody,
    responseSerialize: serialize_todo_TodoResponse,
    responseDeserialize: deserialize_todo_TodoResponse,
  },
  getTodo: {
    path: '/todo.Todo/GetTodo',
    requestStream: false,
    responseStream: false,
    requestType: todo_pb.QueryBody,
    responseType: todo_pb.TodoResponse,
    requestSerialize: serialize_todo_QueryBody,
    requestDeserialize: deserialize_todo_QueryBody,
    responseSerialize: serialize_todo_TodoResponse,
    responseDeserialize: deserialize_todo_TodoResponse,
  },
  updateTodo: {
    path: '/todo.Todo/UpdateTodo',
    requestStream: false,
    responseStream: false,
    requestType: todo_pb.UpdateBody,
    responseType: todo_pb.TodoResponse,
    requestSerialize: serialize_todo_UpdateBody,
    requestDeserialize: deserialize_todo_UpdateBody,
    responseSerialize: serialize_todo_TodoResponse,
    responseDeserialize: deserialize_todo_TodoResponse,
  },
  deleteTodo: {
    path: '/todo.Todo/DeleteTodo',
    requestStream: false,
    responseStream: false,
    requestType: todo_pb.QueryBody,
    responseType: todo_pb.Empty,
    requestSerialize: serialize_todo_QueryBody,
    requestDeserialize: deserialize_todo_QueryBody,
    responseSerialize: serialize_todo_Empty,
    responseDeserialize: deserialize_todo_Empty,
  },
};

exports.TodoClient = grpc.makeGenericClientConstructor(TodoService);
