// package: board
// file: board.proto

import * as jspb from "google-protobuf";

export class GetBoardRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBoardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBoardRequest): GetBoardRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBoardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBoardRequest;
  static deserializeBinaryFromReader(message: GetBoardRequest, reader: jspb.BinaryReader): GetBoardRequest;
}

export namespace GetBoardRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetBoardResponse extends jspb.Message {
  hasBoard(): boolean;
  clearBoard(): void;
  getBoard(): DTOBoard | undefined;
  setBoard(value?: DTOBoard): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBoardResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBoardResponse): GetBoardResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBoardResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBoardResponse;
  static deserializeBinaryFromReader(message: GetBoardResponse, reader: jspb.BinaryReader): GetBoardResponse;
}

export namespace GetBoardResponse {
  export type AsObject = {
    board?: DTOBoard.AsObject,
  }
}

export class DTOBoard extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  clearColumnsList(): void;
  getColumnsList(): Array<DTOColumn>;
  setColumnsList(value: Array<DTOColumn>): void;
  addColumns(value?: DTOColumn, index?: number): DTOColumn;

  clearSprintsList(): void;
  getSprintsList(): Array<DTOSprint>;
  setSprintsList(value: Array<DTOSprint>): void;
  addSprints(value?: DTOSprint, index?: number): DTOSprint;

  clearCardConfigsList(): void;
  getCardConfigsList(): Array<DTOCardVisualConfig>;
  setCardConfigsList(value: Array<DTOCardVisualConfig>): void;
  addCardConfigs(value?: DTOCardVisualConfig, index?: number): DTOCardVisualConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DTOBoard.AsObject;
  static toObject(includeInstance: boolean, msg: DTOBoard): DTOBoard.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DTOBoard, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DTOBoard;
  static deserializeBinaryFromReader(message: DTOBoard, reader: jspb.BinaryReader): DTOBoard;
}

export namespace DTOBoard {
  export type AsObject = {
    id: string,
    key: string,
    columnsList: Array<DTOColumn.AsObject>,
    sprintsList: Array<DTOSprint.AsObject>,
    cardConfigsList: Array<DTOCardVisualConfig.AsObject>,
  }
}

export class DTOColumn extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  clearStepsList(): void;
  getStepsList(): Array<DTOCurrentStep>;
  setStepsList(value: Array<DTOCurrentStep>): void;
  addSteps(value?: DTOCurrentStep, index?: number): DTOCurrentStep;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DTOColumn.AsObject;
  static toObject(includeInstance: boolean, msg: DTOColumn): DTOColumn.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DTOColumn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DTOColumn;
  static deserializeBinaryFromReader(message: DTOColumn, reader: jspb.BinaryReader): DTOColumn;
}

export namespace DTOColumn {
  export type AsObject = {
    id: string,
    name: string,
    stepsList: Array<DTOCurrentStep.AsObject>,
  }
}

export class DTOCurrentStep extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getWorkflowStatus(): string;
  setWorkflowStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DTOCurrentStep.AsObject;
  static toObject(includeInstance: boolean, msg: DTOCurrentStep): DTOCurrentStep.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DTOCurrentStep, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DTOCurrentStep;
  static deserializeBinaryFromReader(message: DTOCurrentStep, reader: jspb.BinaryReader): DTOCurrentStep;
}

export namespace DTOCurrentStep {
  export type AsObject = {
    id: string,
    name: string,
    workflowStatus: string,
  }
}

export class DTOSprint extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DTOSprint.AsObject;
  static toObject(includeInstance: boolean, msg: DTOSprint): DTOSprint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DTOSprint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DTOSprint;
  static deserializeBinaryFromReader(message: DTOSprint, reader: jspb.BinaryReader): DTOSprint;
}

export namespace DTOSprint {
  export type AsObject = {
    id: string,
    name: string,
  }
}

export class DTOCardVisualConfig extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getRowOrder(): number;
  setRowOrder(value: number): void;

  getColumnOrder(): number;
  setColumnOrder(value: number): void;

  getSize(): number;
  setSize(value: number): void;

  getFieldConfigId(): string;
  setFieldConfigId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DTOCardVisualConfig.AsObject;
  static toObject(includeInstance: boolean, msg: DTOCardVisualConfig): DTOCardVisualConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DTOCardVisualConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DTOCardVisualConfig;
  static deserializeBinaryFromReader(message: DTOCardVisualConfig, reader: jspb.BinaryReader): DTOCardVisualConfig;
}

export namespace DTOCardVisualConfig {
  export type AsObject = {
    id: string,
    rowOrder: number,
    columnOrder: number,
    size: number,
    fieldConfigId: string,
  }
}

