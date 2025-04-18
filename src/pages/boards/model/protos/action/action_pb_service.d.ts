// package: action
// file: action.proto

import * as action_pb from "./action_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ActionServiceGetActionsByBoard = {
  readonly methodName: string;
  readonly service: typeof ActionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof action_pb.GetActionsByBoardRequest;
  readonly responseType: typeof action_pb.GetActionsByBoardResponse;
};

type ActionServiceReorderActionsOnBoard = {
  readonly methodName: string;
  readonly service: typeof ActionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof action_pb.ReorderActionsOnBoardRequest;
  readonly responseType: typeof action_pb.ReorderActionsOnBoardResponse;
};

export class ActionService {
  static readonly serviceName: string;
  static readonly GetActionsByBoard: ActionServiceGetActionsByBoard;
  static readonly ReorderActionsOnBoard: ActionServiceReorderActionsOnBoard;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class ActionServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getActionsByBoard(
    requestMessage: action_pb.GetActionsByBoardRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: action_pb.GetActionsByBoardResponse|null) => void
  ): UnaryResponse;
  getActionsByBoard(
    requestMessage: action_pb.GetActionsByBoardRequest,
    callback: (error: ServiceError|null, responseMessage: action_pb.GetActionsByBoardResponse|null) => void
  ): UnaryResponse;
  reorderActionsOnBoard(
    requestMessage: action_pb.ReorderActionsOnBoardRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: action_pb.ReorderActionsOnBoardResponse|null) => void
  ): UnaryResponse;
  reorderActionsOnBoard(
    requestMessage: action_pb.ReorderActionsOnBoardRequest,
    callback: (error: ServiceError|null, responseMessage: action_pb.ReorderActionsOnBoardResponse|null) => void
  ): UnaryResponse;
}

