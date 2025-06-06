// package: board
// file: board/board.proto

import * as board_board_pb from "../board/board_pb";
import {grpc} from "@improbable-eng/grpc-web";

type BoardServiceGetBoard = {
  readonly methodName: string;
  readonly service: typeof BoardService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof board_board_pb.GetBoardRequest;
  readonly responseType: typeof board_board_pb.GetBoardResponse;
};

type BoardServiceUpdateActionBoardOrdering = {
  readonly methodName: string;
  readonly service: typeof BoardService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof board_board_pb.UpdateActionBoardOrderingRequest;
  readonly responseType: typeof board_board_pb.GetBoardResponse;
};

export class BoardService {
  static readonly serviceName: string;
  static readonly GetBoard: BoardServiceGetBoard;
  static readonly UpdateActionBoardOrdering: BoardServiceUpdateActionBoardOrdering;
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

export class BoardServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getBoard(
    requestMessage: board_board_pb.GetBoardRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: board_board_pb.GetBoardResponse|null) => void
  ): UnaryResponse;
  getBoard(
    requestMessage: board_board_pb.GetBoardRequest,
    callback: (error: ServiceError|null, responseMessage: board_board_pb.GetBoardResponse|null) => void
  ): UnaryResponse;
  updateActionBoardOrdering(
    requestMessage: board_board_pb.UpdateActionBoardOrderingRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: board_board_pb.GetBoardResponse|null) => void
  ): UnaryResponse;
  updateActionBoardOrdering(
    requestMessage: board_board_pb.UpdateActionBoardOrderingRequest,
    callback: (error: ServiceError|null, responseMessage: board_board_pb.GetBoardResponse|null) => void
  ): UnaryResponse;
}

