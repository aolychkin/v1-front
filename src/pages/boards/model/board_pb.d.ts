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
  getBoard(): TBoard | undefined;
  setBoard(value?: TBoard): void;

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
    board?: TBoard.AsObject,
  }
}

export class TBoard extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  clearColumnsList(): void;
  getColumnsList(): Array<TColumn>;
  setColumnsList(value: Array<TColumn>): void;
  addColumns(value?: TColumn, index?: number): TColumn;

  clearSprintsList(): void;
  getSprintsList(): Array<TSprint>;
  setSprintsList(value: Array<TSprint>): void;
  addSprints(value?: TSprint, index?: number): TSprint;

  clearFieldConfigsList(): void;
  getFieldConfigsList(): Array<TFieldConfig>;
  setFieldConfigsList(value: Array<TFieldConfig>): void;
  addFieldConfigs(value?: TFieldConfig, index?: number): TFieldConfig;

  clearCardConfigsList(): void;
  getCardConfigsList(): Array<TCardConfig>;
  setCardConfigsList(value: Array<TCardConfig>): void;
  addCardConfigs(value?: TCardConfig, index?: number): TCardConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TBoard.AsObject;
  static toObject(includeInstance: boolean, msg: TBoard): TBoard.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TBoard, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TBoard;
  static deserializeBinaryFromReader(message: TBoard, reader: jspb.BinaryReader): TBoard;
}

export namespace TBoard {
  export type AsObject = {
    id: string,
    key: string,
    columnsList: Array<TColumn.AsObject>,
    sprintsList: Array<TSprint.AsObject>,
    fieldConfigsList: Array<TFieldConfig.AsObject>,
    cardConfigsList: Array<TCardConfig.AsObject>,
  }
}

export class TColumn extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  clearStepsList(): void;
  getStepsList(): Array<TCurrentStep>;
  setStepsList(value: Array<TCurrentStep>): void;
  addSteps(value?: TCurrentStep, index?: number): TCurrentStep;

  clearOnBoardActionList(): void;
  getOnBoardActionList(): Array<TCard>;
  setOnBoardActionList(value: Array<TCard>): void;
  addOnBoardAction(value?: TCard, index?: number): TCard;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TColumn.AsObject;
  static toObject(includeInstance: boolean, msg: TColumn): TColumn.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TColumn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TColumn;
  static deserializeBinaryFromReader(message: TColumn, reader: jspb.BinaryReader): TColumn;
}

export namespace TColumn {
  export type AsObject = {
    id: string,
    name: string,
    stepsList: Array<TCurrentStep.AsObject>,
    onBoardActionList: Array<TCard.AsObject>,
  }
}

export class TCurrentStep extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getWorkflowStatus(): string;
  setWorkflowStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TCurrentStep.AsObject;
  static toObject(includeInstance: boolean, msg: TCurrentStep): TCurrentStep.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TCurrentStep, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TCurrentStep;
  static deserializeBinaryFromReader(message: TCurrentStep, reader: jspb.BinaryReader): TCurrentStep;
}

export namespace TCurrentStep {
  export type AsObject = {
    id: string,
    name: string,
    workflowStatus: string,
  }
}

export class TCard extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getOrder(): number;
  setOrder(value: number): void;

  getColumnId(): string;
  setColumnId(value: string): void;

  getActionNum(): number;
  setActionNum(value: number): void;

  getCurrentStepId(): string;
  setCurrentStepId(value: string): void;

  clearSprintIdsList(): void;
  getSprintIdsList(): Array<string>;
  setSprintIdsList(value: Array<string>): void;
  addSprintIds(value: string, index?: number): string;

  clearFieldsList(): void;
  getFieldsList(): Array<TActionField>;
  setFieldsList(value: Array<TActionField>): void;
  addFields(value?: TActionField, index?: number): TActionField;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TCard.AsObject;
  static toObject(includeInstance: boolean, msg: TCard): TCard.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TCard, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TCard;
  static deserializeBinaryFromReader(message: TCard, reader: jspb.BinaryReader): TCard;
}

export namespace TCard {
  export type AsObject = {
    id: string,
    order: number,
    columnId: string,
    actionNum: number,
    currentStepId: string,
    sprintIdsList: Array<string>,
    fieldsList: Array<TActionField.AsObject>,
  }
}

export class TActionField extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  getConfigId(): string;
  setConfigId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TActionField.AsObject;
  static toObject(includeInstance: boolean, msg: TActionField): TActionField.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TActionField, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TActionField;
  static deserializeBinaryFromReader(message: TActionField, reader: jspb.BinaryReader): TActionField;
}

export namespace TActionField {
  export type AsObject = {
    id: string,
    value: string,
    configId: string,
  }
}

export class TCardConfig extends jspb.Message {
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
  toObject(includeInstance?: boolean): TCardConfig.AsObject;
  static toObject(includeInstance: boolean, msg: TCardConfig): TCardConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TCardConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TCardConfig;
  static deserializeBinaryFromReader(message: TCardConfig, reader: jspb.BinaryReader): TCardConfig;
}

export namespace TCardConfig {
  export type AsObject = {
    id: string,
    rowOrder: number,
    columnOrder: number,
    size: number,
    fieldConfigId: string,
  }
}

export class TFieldConfig extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getAlias(): string;
  setAlias(value: string): void;

  hasFieldType(): boolean;
  clearFieldType(): void;
  getFieldType(): TFieldType | undefined;
  setFieldType(value?: TFieldType): void;

  getDefaultvalue(): string;
  setDefaultvalue(value: string): void;

  getAvailablevalues(): string;
  setAvailablevalues(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TFieldConfig.AsObject;
  static toObject(includeInstance: boolean, msg: TFieldConfig): TFieldConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TFieldConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TFieldConfig;
  static deserializeBinaryFromReader(message: TFieldConfig, reader: jspb.BinaryReader): TFieldConfig;
}

export namespace TFieldConfig {
  export type AsObject = {
    id: string,
    name: string,
    alias: string,
    fieldType?: TFieldType.AsObject,
    defaultvalue: string,
    availablevalues: string,
  }
}

export class TFieldType extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getAlias(): string;
  setAlias(value: string): void;

  getIsCustom(): boolean;
  setIsCustom(value: boolean): void;

  clearAvailableSizesList(): void;
  getAvailableSizesList(): Array<string>;
  setAvailableSizesList(value: Array<string>): void;
  addAvailableSizes(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TFieldType.AsObject;
  static toObject(includeInstance: boolean, msg: TFieldType): TFieldType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TFieldType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TFieldType;
  static deserializeBinaryFromReader(message: TFieldType, reader: jspb.BinaryReader): TFieldType;
}

export namespace TFieldType {
  export type AsObject = {
    id: string,
    name: string,
    alias: string,
    isCustom: boolean,
    availableSizesList: Array<string>,
  }
}

export class TSprint extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TSprint.AsObject;
  static toObject(includeInstance: boolean, msg: TSprint): TSprint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TSprint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TSprint;
  static deserializeBinaryFromReader(message: TSprint, reader: jspb.BinaryReader): TSprint;
}

export namespace TSprint {
  export type AsObject = {
    id: string,
    name: string,
  }
}

