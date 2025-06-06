// package: board
// file: board/board.proto

var board_board_pb = require("../board/board_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var BoardService = (function () {
  function BoardService() {}
  BoardService.serviceName = "board.BoardService";
  return BoardService;
}());

BoardService.GetBoard = {
  methodName: "GetBoard",
  service: BoardService,
  requestStream: false,
  responseStream: false,
  requestType: board_board_pb.GetBoardRequest,
  responseType: board_board_pb.GetBoardResponse
};

BoardService.UpdateActionBoardOrdering = {
  methodName: "UpdateActionBoardOrdering",
  service: BoardService,
  requestStream: false,
  responseStream: false,
  requestType: board_board_pb.UpdateActionBoardOrderingRequest,
  responseType: board_board_pb.GetBoardResponse
};

exports.BoardService = BoardService;

function BoardServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

BoardServiceClient.prototype.getBoard = function getBoard(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BoardService.GetBoard, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BoardServiceClient.prototype.updateActionBoardOrdering = function updateActionBoardOrdering(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BoardService.UpdateActionBoardOrdering, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.BoardServiceClient = BoardServiceClient;

