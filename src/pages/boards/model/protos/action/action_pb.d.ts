// package: action
// file: action.proto

import * as jspb from "google-protobuf";

export class GetActionsByBoardRequest extends jspb.Message {
  getBoardId(): string;
  setBoardId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetActionsByBoardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetActionsByBoardRequest): GetActionsByBoardRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetActionsByBoardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetActionsByBoardRequest;
  static deserializeBinaryFromReader(message: GetActionsByBoardRequest, reader: jspb.BinaryReader): GetActionsByBoardRequest;
}

export namespace GetActionsByBoardRequest {
  export type AsObject = {
    boardId: string,
  }
}

export class GetActionsByBoardResponse extends jspb.Message {
  clearCardsList(): void;
  getCardsList(): Array<DTOCard>;
  setCardsList(value: Array<DTOCard>): void;
  addCards(value?: DTOCard, index?: number): DTOCard;

  clearFieldConfigsList(): void;
  getFieldConfigsList(): Array<DTOFieldConfig>;
  setFieldConfigsList(value: Array<DTOFieldConfig>): void;
  addFieldConfigs(value?: DTOFieldConfig, index?: number): DTOFieldConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetActionsByBoardResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetActionsByBoardResponse): GetActionsByBoardResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetActionsByBoardResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetActionsByBoardResponse;
  static deserializeBinaryFromReader(message: GetActionsByBoardResponse, reader: jspb.BinaryReader): GetActionsByBoardResponse;
}

export namespace GetActionsByBoardResponse {
  export type AsObject = {
    cardsList: Array<DTOCard.AsObject>,
    fieldConfigsList: Array<DTOFieldConfig.AsObject>,
  }
}

export class DTOCard extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getOrder(): number;
  setOrder(value: number): void;

  getColumnId(): string;
  setColumnId(value: string): void;

  hasAction(): boolean;
  clearAction(): void;
  getAction(): DTOAction | undefined;
  setAction(value?: DTOAction): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DTOCard.AsObject;
  static toObject(includeInstance: boolean, msg: DTOCard): DTOCard.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DTOCard, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DTOCard;
  static deserializeBinaryFromReader(message: DTOCard, reader: jspb.BinaryReader): DTOCard;
}

export namespace DTOCard {
  export type AsObject = {
    id: string,
    order: number,
    columnId: string,
    action?: DTOAction.AsObject,
  }
}

export class DTOAction extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  getActionNum(): number;
  setActionNum(value: number): void;

  getStepId(): string;
  setStepId(value: string): void;

  clearSprintIdsList(): void;
  getSprintIdsList(): Array<string>;
  setSprintIdsList(value: Array<string>): void;
  addSprintIds(value: string, index?: number): string;

  clearFieldsList(): void;
  getFieldsList(): Array<DTOActionField>;
  setFieldsList(value: Array<DTOActionField>): void;
  addFields(value?: DTOActionField, index?: number): DTOActionField;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DTOAction.AsObject;
  static toObject(includeInstance: boolean, msg: DTOAction): DTOAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DTOAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DTOAction;
  static deserializeBinaryFromReader(message: DTOAction, reader: jspb.BinaryReader): DTOAction;
}

export namespace DTOAction {
  export type AsObject = {
    id: string,
    key: string,
    actionNum: number,
    stepId: string,
    sprintIdsList: Array<string>,
    fieldsList: Array<DTOActionField.AsObject>,
  }
}

export class DTOActionField extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  getConfigId(): string;
  setConfigId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DTOActionField.AsObject;
  static toObject(includeInstance: boolean, msg: DTOActionField): DTOActionField.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DTOActionField, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DTOActionField;
  static deserializeBinaryFromReader(message: DTOActionField, reader: jspb.BinaryReader): DTOActionField;
}

export namespace DTOActionField {
  export type AsObject = {
    id: string,
    value: string,
    configId: string,
  }
}

export class DTOFieldConfig extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getAlias(): string;
  setAlias(value: string): void;

  hasFieldType(): boolean;
  clearFieldType(): void;
  getFieldType(): DTOFieldType | undefined;
  setFieldType(value?: DTOFieldType): void;

  getDefaultvalue(): string;
  setDefaultvalue(value: string): void;

  getAvailablevalues(): string;
  setAvailablevalues(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DTOFieldConfig.AsObject;
  static toObject(includeInstance: boolean, msg: DTOFieldConfig): DTOFieldConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DTOFieldConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DTOFieldConfig;
  static deserializeBinaryFromReader(message: DTOFieldConfig, reader: jspb.BinaryReader): DTOFieldConfig;
}

export namespace DTOFieldConfig {
  export type AsObject = {
    id: string,
    name: string,
    alias: string,
    fieldType?: DTOFieldType.AsObject,
    defaultvalue: string,
    availablevalues: string,
  }
}

export class DTOFieldType extends jspb.Message {
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
  toObject(includeInstance?: boolean): DTOFieldType.AsObject;
  static toObject(includeInstance: boolean, msg: DTOFieldType): DTOFieldType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DTOFieldType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DTOFieldType;
  static deserializeBinaryFromReader(message: DTOFieldType, reader: jspb.BinaryReader): DTOFieldType;
}

export namespace DTOFieldType {
  export type AsObject = {
    id: string,
    name: string,
    alias: string,
    isCustom: boolean,
    availableSizesList: Array<string>,
  }
}

