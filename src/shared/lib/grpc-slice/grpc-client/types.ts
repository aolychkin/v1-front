import { MethodDefinition } from "@improbable-eng/grpc-web/dist/typings/service";
import { Message } from "google-protobuf";
import { grpc } from "@improbable-eng/grpc-web";
import { BaseQueryFn } from "@reduxjs/toolkit/dist/query/react";
import { GrpcErrorResponse } from "shared/lib/utility-types/error-response";

export type GrpcClientProps = {
  host: string
  metadata?: grpc.Metadata
}

export type GrpcErrorResponseProps = {
  error?: GrpcErrorResponse
  data?: Message | Message[]
}

export interface GrpcBaseQueryParams {
  method: MethodDefinition<Message, Message>
  request: Message
}

export type GrpcQueryFN = BaseQueryFn<GrpcBaseQueryParams, unknown, GrpcErrorResponse>;