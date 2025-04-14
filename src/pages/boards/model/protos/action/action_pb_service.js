// package: action
// file: action.proto

var action_pb = require("./action_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Action = (function () {
  function Action() {}
  Action.serviceName = "action.Action";
  return Action;
}());

Action.GetActionsByBoard = {
  methodName: "GetActionsByBoard",
  service: Action,
  requestStream: false,
  responseStream: false,
  requestType: action_pb.GetActionsByBoardRequest,
  responseType: action_pb.GetActionsByBoardResponse
};

exports.Action = Action;

function ActionClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ActionClient.prototype.getActionsByBoard = function getActionsByBoard(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Action.GetActionsByBoard, {
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

exports.ActionClient = ActionClient;

