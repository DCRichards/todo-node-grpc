// package: todo
// file: todo.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as todo_pb from "./todo_pb";

interface ITodoService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createTodo: ITodoService_ICreateTodo;
    getTodo: ITodoService_IGetTodo;
    updateTodo: ITodoService_IUpdateTodo;
    deleteTodo: ITodoService_IDeleteTodo;
}

interface ITodoService_ICreateTodo extends grpc.MethodDefinition<todo_pb.CreateBody, todo_pb.TodoResponse> {
    path: string; // "/todo.Todo/CreateTodo"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<todo_pb.CreateBody>;
    requestDeserialize: grpc.deserialize<todo_pb.CreateBody>;
    responseSerialize: grpc.serialize<todo_pb.TodoResponse>;
    responseDeserialize: grpc.deserialize<todo_pb.TodoResponse>;
}
interface ITodoService_IGetTodo extends grpc.MethodDefinition<todo_pb.QueryBody, todo_pb.TodoResponse> {
    path: string; // "/todo.Todo/GetTodo"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<todo_pb.QueryBody>;
    requestDeserialize: grpc.deserialize<todo_pb.QueryBody>;
    responseSerialize: grpc.serialize<todo_pb.TodoResponse>;
    responseDeserialize: grpc.deserialize<todo_pb.TodoResponse>;
}
interface ITodoService_IUpdateTodo extends grpc.MethodDefinition<todo_pb.UpdateBody, todo_pb.TodoResponse> {
    path: string; // "/todo.Todo/UpdateTodo"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<todo_pb.UpdateBody>;
    requestDeserialize: grpc.deserialize<todo_pb.UpdateBody>;
    responseSerialize: grpc.serialize<todo_pb.TodoResponse>;
    responseDeserialize: grpc.deserialize<todo_pb.TodoResponse>;
}
interface ITodoService_IDeleteTodo extends grpc.MethodDefinition<todo_pb.QueryBody, todo_pb.Empty> {
    path: string; // "/todo.Todo/DeleteTodo"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<todo_pb.QueryBody>;
    requestDeserialize: grpc.deserialize<todo_pb.QueryBody>;
    responseSerialize: grpc.serialize<todo_pb.Empty>;
    responseDeserialize: grpc.deserialize<todo_pb.Empty>;
}

export const TodoService: ITodoService;

export interface ITodoServer {
    createTodo: grpc.handleUnaryCall<todo_pb.CreateBody, todo_pb.TodoResponse>;
    getTodo: grpc.handleUnaryCall<todo_pb.QueryBody, todo_pb.TodoResponse>;
    updateTodo: grpc.handleUnaryCall<todo_pb.UpdateBody, todo_pb.TodoResponse>;
    deleteTodo: grpc.handleUnaryCall<todo_pb.QueryBody, todo_pb.Empty>;
}

export interface ITodoClient {
    createTodo(request: todo_pb.CreateBody, callback: (error: grpc.ServiceError | null, response: todo_pb.TodoResponse) => void): grpc.ClientUnaryCall;
    createTodo(request: todo_pb.CreateBody, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.TodoResponse) => void): grpc.ClientUnaryCall;
    createTodo(request: todo_pb.CreateBody, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.TodoResponse) => void): grpc.ClientUnaryCall;
    getTodo(request: todo_pb.QueryBody, callback: (error: grpc.ServiceError | null, response: todo_pb.TodoResponse) => void): grpc.ClientUnaryCall;
    getTodo(request: todo_pb.QueryBody, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.TodoResponse) => void): grpc.ClientUnaryCall;
    getTodo(request: todo_pb.QueryBody, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.TodoResponse) => void): grpc.ClientUnaryCall;
    updateTodo(request: todo_pb.UpdateBody, callback: (error: grpc.ServiceError | null, response: todo_pb.TodoResponse) => void): grpc.ClientUnaryCall;
    updateTodo(request: todo_pb.UpdateBody, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.TodoResponse) => void): grpc.ClientUnaryCall;
    updateTodo(request: todo_pb.UpdateBody, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.TodoResponse) => void): grpc.ClientUnaryCall;
    deleteTodo(request: todo_pb.QueryBody, callback: (error: grpc.ServiceError | null, response: todo_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteTodo(request: todo_pb.QueryBody, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteTodo(request: todo_pb.QueryBody, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class TodoClient extends grpc.Client implements ITodoClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createTodo(request: todo_pb.CreateBody, callback: (error: grpc.ServiceError | null, response: todo_pb.TodoResponse) => void): grpc.ClientUnaryCall;
    public createTodo(request: todo_pb.CreateBody, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.TodoResponse) => void): grpc.ClientUnaryCall;
    public createTodo(request: todo_pb.CreateBody, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.TodoResponse) => void): grpc.ClientUnaryCall;
    public getTodo(request: todo_pb.QueryBody, callback: (error: grpc.ServiceError | null, response: todo_pb.TodoResponse) => void): grpc.ClientUnaryCall;
    public getTodo(request: todo_pb.QueryBody, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.TodoResponse) => void): grpc.ClientUnaryCall;
    public getTodo(request: todo_pb.QueryBody, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.TodoResponse) => void): grpc.ClientUnaryCall;
    public updateTodo(request: todo_pb.UpdateBody, callback: (error: grpc.ServiceError | null, response: todo_pb.TodoResponse) => void): grpc.ClientUnaryCall;
    public updateTodo(request: todo_pb.UpdateBody, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.TodoResponse) => void): grpc.ClientUnaryCall;
    public updateTodo(request: todo_pb.UpdateBody, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.TodoResponse) => void): grpc.ClientUnaryCall;
    public deleteTodo(request: todo_pb.QueryBody, callback: (error: grpc.ServiceError | null, response: todo_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteTodo(request: todo_pb.QueryBody, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteTodo(request: todo_pb.QueryBody, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.Empty) => void): grpc.ClientUnaryCall;
}
