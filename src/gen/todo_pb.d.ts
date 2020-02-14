// package: todo.v1
// file: todo.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Todo extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getTitle(): string;
    setTitle(value: string): void;

    getCompleted(): boolean;
    setCompleted(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Todo.AsObject;
    static toObject(includeInstance: boolean, msg: Todo): Todo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Todo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Todo;
    static deserializeBinaryFromReader(message: Todo, reader: jspb.BinaryReader): Todo;
}

export namespace Todo {
    export type AsObject = {
        id: string,
        title: string,
        completed: boolean,
    }
}

export class ListTodosRequest extends jspb.Message { 
    getPageSize(): number;
    setPageSize(value: number): void;

    getPageToken(): number;
    setPageToken(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTodosRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListTodosRequest): ListTodosRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTodosRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTodosRequest;
    static deserializeBinaryFromReader(message: ListTodosRequest, reader: jspb.BinaryReader): ListTodosRequest;
}

export namespace ListTodosRequest {
    export type AsObject = {
        pageSize: number,
        pageToken: number,
    }
}

export class ListTodosResponse extends jspb.Message { 
    clearTodoList(): void;
    getTodoList(): Array<Todo>;
    setTodoList(value: Array<Todo>): void;
    addTodo(value?: Todo, index?: number): Todo;

    getNextPageToken(): string;
    setNextPageToken(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTodosResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListTodosResponse): ListTodosResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTodosResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTodosResponse;
    static deserializeBinaryFromReader(message: ListTodosResponse, reader: jspb.BinaryReader): ListTodosResponse;
}

export namespace ListTodosResponse {
    export type AsObject = {
        todoList: Array<Todo.AsObject>,
        nextPageToken: string,
    }
}

export class GetTodoByIdRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTodoByIdRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTodoByIdRequest): GetTodoByIdRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTodoByIdRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTodoByIdRequest;
    static deserializeBinaryFromReader(message: GetTodoByIdRequest, reader: jspb.BinaryReader): GetTodoByIdRequest;
}

export namespace GetTodoByIdRequest {
    export type AsObject = {
        id: string,
    }
}

export class GetTodoByIdResponse extends jspb.Message { 

    hasTodo(): boolean;
    clearTodo(): void;
    getTodo(): Todo | undefined;
    setTodo(value?: Todo): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTodoByIdResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetTodoByIdResponse): GetTodoByIdResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTodoByIdResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTodoByIdResponse;
    static deserializeBinaryFromReader(message: GetTodoByIdResponse, reader: jspb.BinaryReader): GetTodoByIdResponse;
}

export namespace GetTodoByIdResponse {
    export type AsObject = {
        todo?: Todo.AsObject,
    }
}

export class CreateTodoRequest extends jspb.Message { 

    hasTodo(): boolean;
    clearTodo(): void;
    getTodo(): Todo | undefined;
    setTodo(value?: Todo): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTodoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTodoRequest): CreateTodoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTodoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTodoRequest;
    static deserializeBinaryFromReader(message: CreateTodoRequest, reader: jspb.BinaryReader): CreateTodoRequest;
}

export namespace CreateTodoRequest {
    export type AsObject = {
        todo?: Todo.AsObject,
    }
}

export class CreateTodoResponse extends jspb.Message { 

    hasTodo(): boolean;
    clearTodo(): void;
    getTodo(): Todo | undefined;
    setTodo(value?: Todo): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTodoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTodoResponse): CreateTodoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTodoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTodoResponse;
    static deserializeBinaryFromReader(message: CreateTodoResponse, reader: jspb.BinaryReader): CreateTodoResponse;
}

export namespace CreateTodoResponse {
    export type AsObject = {
        todo?: Todo.AsObject,
    }
}

export class UpdateTodoRequest extends jspb.Message { 

    hasTodo(): boolean;
    clearTodo(): void;
    getTodo(): Todo | undefined;
    setTodo(value?: Todo): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateTodoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateTodoRequest): UpdateTodoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateTodoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateTodoRequest;
    static deserializeBinaryFromReader(message: UpdateTodoRequest, reader: jspb.BinaryReader): UpdateTodoRequest;
}

export namespace UpdateTodoRequest {
    export type AsObject = {
        todo?: Todo.AsObject,
    }
}

export class UpdateTodoResponse extends jspb.Message { 

    hasTodo(): boolean;
    clearTodo(): void;
    getTodo(): Todo | undefined;
    setTodo(value?: Todo): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateTodoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateTodoResponse): UpdateTodoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateTodoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateTodoResponse;
    static deserializeBinaryFromReader(message: UpdateTodoResponse, reader: jspb.BinaryReader): UpdateTodoResponse;
}

export namespace UpdateTodoResponse {
    export type AsObject = {
        todo?: Todo.AsObject,
    }
}

export class DeleteTodoRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteTodoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteTodoRequest): DeleteTodoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteTodoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteTodoRequest;
    static deserializeBinaryFromReader(message: DeleteTodoRequest, reader: jspb.BinaryReader): DeleteTodoRequest;
}

export namespace DeleteTodoRequest {
    export type AsObject = {
        id: string,
    }
}

export class DeleteTodoResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteTodoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteTodoResponse): DeleteTodoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteTodoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteTodoResponse;
    static deserializeBinaryFromReader(message: DeleteTodoResponse, reader: jspb.BinaryReader): DeleteTodoResponse;
}

export namespace DeleteTodoResponse {
    export type AsObject = {
    }
}
