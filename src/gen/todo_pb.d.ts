// package: todo
// file: todo.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class CreateBody extends jspb.Message { 

    hasTodo(): boolean;
    clearTodo(): void;
    getTodo(): CreateBody.Todo | undefined;
    setTodo(value?: CreateBody.Todo): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateBody.AsObject;
    static toObject(includeInstance: boolean, msg: CreateBody): CreateBody.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateBody, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateBody;
    static deserializeBinaryFromReader(message: CreateBody, reader: jspb.BinaryReader): CreateBody;
}

export namespace CreateBody {
    export type AsObject = {
        todo?: CreateBody.Todo.AsObject,
    }


    export class Todo extends jspb.Message { 
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
            title: string,
            completed: boolean,
        }
    }

}

export class QueryBody extends jspb.Message { 

    hasQuery(): boolean;
    clearQuery(): void;
    getQuery(): QueryBody.Query | undefined;
    setQuery(value?: QueryBody.Query): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryBody.AsObject;
    static toObject(includeInstance: boolean, msg: QueryBody): QueryBody.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryBody, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryBody;
    static deserializeBinaryFromReader(message: QueryBody, reader: jspb.BinaryReader): QueryBody;
}

export namespace QueryBody {
    export type AsObject = {
        query?: QueryBody.Query.AsObject,
    }


    export class Query extends jspb.Message { 
        getId(): string;
        setId(value: string): void;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Query.AsObject;
        static toObject(includeInstance: boolean, msg: Query): Query.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Query, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Query;
        static deserializeBinaryFromReader(message: Query, reader: jspb.BinaryReader): Query;
    }

    export namespace Query {
        export type AsObject = {
            id: string,
        }
    }

}

export class UpdateBody extends jspb.Message { 

    hasTodo(): boolean;
    clearTodo(): void;
    getTodo(): UpdateBody.Todo | undefined;
    setTodo(value?: UpdateBody.Todo): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateBody.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateBody): UpdateBody.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateBody, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateBody;
    static deserializeBinaryFromReader(message: UpdateBody, reader: jspb.BinaryReader): UpdateBody;
}

export namespace UpdateBody {
    export type AsObject = {
        todo?: UpdateBody.Todo.AsObject,
    }


    export class Todo extends jspb.Message { 
        getTitle(): string;
        setTitle(value: string): void;

        getCompleted(): string;
        setCompleted(value: string): void;


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
            title: string,
            completed: string,
        }
    }

}

export class TodoResponse extends jspb.Message { 

    hasTodo(): boolean;
    clearTodo(): void;
    getTodo(): TodoResponse.Todo | undefined;
    setTodo(value?: TodoResponse.Todo): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TodoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TodoResponse): TodoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TodoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TodoResponse;
    static deserializeBinaryFromReader(message: TodoResponse, reader: jspb.BinaryReader): TodoResponse;
}

export namespace TodoResponse {
    export type AsObject = {
        todo?: TodoResponse.Todo.AsObject,
    }


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

}

export class Empty extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Empty.AsObject;
    static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Empty;
    static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
    export type AsObject = {
    }
}
