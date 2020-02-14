// package: todo.v1
// file: todo.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as todo_pb from "./todo_pb";

interface ITodoServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listTodos: ITodoServiceService_IListTodos;
    getTodoById: ITodoServiceService_IGetTodoById;
    createTodo: ITodoServiceService_ICreateTodo;
    updateTodo: ITodoServiceService_IUpdateTodo;
    deleteTodo: ITodoServiceService_IDeleteTodo;
}

interface ITodoServiceService_IListTodos extends grpc.MethodDefinition<todo_pb.ListTodosRequest, todo_pb.ListTodosResponse> {
    path: string; // "/todo.v1.TodoService/ListTodos"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<todo_pb.ListTodosRequest>;
    requestDeserialize: grpc.deserialize<todo_pb.ListTodosRequest>;
    responseSerialize: grpc.serialize<todo_pb.ListTodosResponse>;
    responseDeserialize: grpc.deserialize<todo_pb.ListTodosResponse>;
}
interface ITodoServiceService_IGetTodoById extends grpc.MethodDefinition<todo_pb.GetTodoByIdRequest, todo_pb.GetTodoByIdResponse> {
    path: string; // "/todo.v1.TodoService/GetTodoById"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<todo_pb.GetTodoByIdRequest>;
    requestDeserialize: grpc.deserialize<todo_pb.GetTodoByIdRequest>;
    responseSerialize: grpc.serialize<todo_pb.GetTodoByIdResponse>;
    responseDeserialize: grpc.deserialize<todo_pb.GetTodoByIdResponse>;
}
interface ITodoServiceService_ICreateTodo extends grpc.MethodDefinition<todo_pb.CreateTodoRequest, todo_pb.CreateTodoResponse> {
    path: string; // "/todo.v1.TodoService/CreateTodo"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<todo_pb.CreateTodoRequest>;
    requestDeserialize: grpc.deserialize<todo_pb.CreateTodoRequest>;
    responseSerialize: grpc.serialize<todo_pb.CreateTodoResponse>;
    responseDeserialize: grpc.deserialize<todo_pb.CreateTodoResponse>;
}
interface ITodoServiceService_IUpdateTodo extends grpc.MethodDefinition<todo_pb.UpdateTodoRequest, todo_pb.UpdateTodoResponse> {
    path: string; // "/todo.v1.TodoService/UpdateTodo"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<todo_pb.UpdateTodoRequest>;
    requestDeserialize: grpc.deserialize<todo_pb.UpdateTodoRequest>;
    responseSerialize: grpc.serialize<todo_pb.UpdateTodoResponse>;
    responseDeserialize: grpc.deserialize<todo_pb.UpdateTodoResponse>;
}
interface ITodoServiceService_IDeleteTodo extends grpc.MethodDefinition<todo_pb.DeleteTodoRequest, todo_pb.DeleteTodoResponse> {
    path: string; // "/todo.v1.TodoService/DeleteTodo"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<todo_pb.DeleteTodoRequest>;
    requestDeserialize: grpc.deserialize<todo_pb.DeleteTodoRequest>;
    responseSerialize: grpc.serialize<todo_pb.DeleteTodoResponse>;
    responseDeserialize: grpc.deserialize<todo_pb.DeleteTodoResponse>;
}

export const TodoServiceService: ITodoServiceService;

export interface ITodoServiceServer {
    listTodos: grpc.handleUnaryCall<todo_pb.ListTodosRequest, todo_pb.ListTodosResponse>;
    getTodoById: grpc.handleUnaryCall<todo_pb.GetTodoByIdRequest, todo_pb.GetTodoByIdResponse>;
    createTodo: grpc.handleUnaryCall<todo_pb.CreateTodoRequest, todo_pb.CreateTodoResponse>;
    updateTodo: grpc.handleUnaryCall<todo_pb.UpdateTodoRequest, todo_pb.UpdateTodoResponse>;
    deleteTodo: grpc.handleUnaryCall<todo_pb.DeleteTodoRequest, todo_pb.DeleteTodoResponse>;
}

export interface ITodoServiceClient {
    listTodos(request: todo_pb.ListTodosRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.ListTodosResponse) => void): grpc.ClientUnaryCall;
    listTodos(request: todo_pb.ListTodosRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.ListTodosResponse) => void): grpc.ClientUnaryCall;
    listTodos(request: todo_pb.ListTodosRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.ListTodosResponse) => void): grpc.ClientUnaryCall;
    getTodoById(request: todo_pb.GetTodoByIdRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.GetTodoByIdResponse) => void): grpc.ClientUnaryCall;
    getTodoById(request: todo_pb.GetTodoByIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.GetTodoByIdResponse) => void): grpc.ClientUnaryCall;
    getTodoById(request: todo_pb.GetTodoByIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.GetTodoByIdResponse) => void): grpc.ClientUnaryCall;
    createTodo(request: todo_pb.CreateTodoRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.CreateTodoResponse) => void): grpc.ClientUnaryCall;
    createTodo(request: todo_pb.CreateTodoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.CreateTodoResponse) => void): grpc.ClientUnaryCall;
    createTodo(request: todo_pb.CreateTodoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.CreateTodoResponse) => void): grpc.ClientUnaryCall;
    updateTodo(request: todo_pb.UpdateTodoRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.UpdateTodoResponse) => void): grpc.ClientUnaryCall;
    updateTodo(request: todo_pb.UpdateTodoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.UpdateTodoResponse) => void): grpc.ClientUnaryCall;
    updateTodo(request: todo_pb.UpdateTodoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.UpdateTodoResponse) => void): grpc.ClientUnaryCall;
    deleteTodo(request: todo_pb.DeleteTodoRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.DeleteTodoResponse) => void): grpc.ClientUnaryCall;
    deleteTodo(request: todo_pb.DeleteTodoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.DeleteTodoResponse) => void): grpc.ClientUnaryCall;
    deleteTodo(request: todo_pb.DeleteTodoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.DeleteTodoResponse) => void): grpc.ClientUnaryCall;
}

export class TodoServiceClient extends grpc.Client implements ITodoServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public listTodos(request: todo_pb.ListTodosRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.ListTodosResponse) => void): grpc.ClientUnaryCall;
    public listTodos(request: todo_pb.ListTodosRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.ListTodosResponse) => void): grpc.ClientUnaryCall;
    public listTodos(request: todo_pb.ListTodosRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.ListTodosResponse) => void): grpc.ClientUnaryCall;
    public getTodoById(request: todo_pb.GetTodoByIdRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.GetTodoByIdResponse) => void): grpc.ClientUnaryCall;
    public getTodoById(request: todo_pb.GetTodoByIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.GetTodoByIdResponse) => void): grpc.ClientUnaryCall;
    public getTodoById(request: todo_pb.GetTodoByIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.GetTodoByIdResponse) => void): grpc.ClientUnaryCall;
    public createTodo(request: todo_pb.CreateTodoRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.CreateTodoResponse) => void): grpc.ClientUnaryCall;
    public createTodo(request: todo_pb.CreateTodoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.CreateTodoResponse) => void): grpc.ClientUnaryCall;
    public createTodo(request: todo_pb.CreateTodoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.CreateTodoResponse) => void): grpc.ClientUnaryCall;
    public updateTodo(request: todo_pb.UpdateTodoRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.UpdateTodoResponse) => void): grpc.ClientUnaryCall;
    public updateTodo(request: todo_pb.UpdateTodoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.UpdateTodoResponse) => void): grpc.ClientUnaryCall;
    public updateTodo(request: todo_pb.UpdateTodoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.UpdateTodoResponse) => void): grpc.ClientUnaryCall;
    public deleteTodo(request: todo_pb.DeleteTodoRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.DeleteTodoResponse) => void): grpc.ClientUnaryCall;
    public deleteTodo(request: todo_pb.DeleteTodoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.DeleteTodoResponse) => void): grpc.ClientUnaryCall;
    public deleteTodo(request: todo_pb.DeleteTodoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.DeleteTodoResponse) => void): grpc.ClientUnaryCall;
}
