// package: board
// file: board/board.proto

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

export class UpdateActionBoardOrderingRequest extends jspb.Message {
  getActionId(): string;
  setActionId(value: string): void;

  getRankValue(): number;
  setRankValue(value: number): void;

  getStatusId(): string;
  setStatusId(value: string): void;

  getColumnId(): string;
  setColumnId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateActionBoardOrderingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateActionBoardOrderingRequest): UpdateActionBoardOrderingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateActionBoardOrderingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateActionBoardOrderingRequest;
  static deserializeBinaryFromReader(message: UpdateActionBoardOrderingRequest, reader: jspb.BinaryReader): UpdateActionBoardOrderingRequest;
}

export namespace UpdateActionBoardOrderingRequest {
  export type AsObject = {
    actionId: string,
    rankValue: number,
    statusId: string,
    columnId: string,
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

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearColumnsList(): void;
  getColumnsList(): Array<DTOColumn>;
  setColumnsList(value: Array<DTOColumn>): void;
  addColumns(value?: DTOColumn, index?: number): DTOColumn;

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
    name: string,
    description: string,
    columnsList: Array<DTOColumn.AsObject>,
  }
}

export class DTOColumn extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getOrder(): number;
  setOrder(value: number): void;

  clearActionStatusesList(): void;
  getActionStatusesList(): Array<DTOActionStatus>;
  setActionStatusesList(value: Array<DTOActionStatus>): void;
  addActionStatuses(value?: DTOActionStatus, index?: number): DTOActionStatus;

  clearActionsList(): void;
  getActionsList(): Array<DTOAction>;
  setActionsList(value: Array<DTOAction>): void;
  addActions(value?: DTOAction, index?: number): DTOAction;

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
    description: string,
    order: number,
    actionStatusesList: Array<DTOActionStatus.AsObject>,
    actionsList: Array<DTOAction.AsObject>,
  }
}

export class DTOActionStatus extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getTypeKey(): string;
  setTypeKey(value: string): void;

  getTypeName(): string;
  setTypeName(value: string): void;

  getTypeDescription(): string;
  setTypeDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DTOActionStatus.AsObject;
  static toObject(includeInstance: boolean, msg: DTOActionStatus): DTOActionStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DTOActionStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DTOActionStatus;
  static deserializeBinaryFromReader(message: DTOActionStatus, reader: jspb.BinaryReader): DTOActionStatus;
}

export namespace DTOActionStatus {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    typeKey: string,
    typeName: string,
    typeDescription: string,
  }
}

export class DTOAction extends jspb.Message {
  getOrder(): number;
  setOrder(value: number): void;

  getColumnId(): string;
  setColumnId(value: string): void;

  getId(): string;
  setId(value: string): void;

  getIndex(): number;
  setIndex(value: number): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): DTOActionStatus | undefined;
  setStatus(value?: DTOActionStatus): void;

  hasType(): boolean;
  clearType(): void;
  getType(): DTOActionType | undefined;
  setType(value?: DTOActionType): void;

  clearFieldsValueList(): void;
  getFieldsValueList(): Array<DTOActionFieldValue>;
  setFieldsValueList(value: Array<DTOActionFieldValue>): void;
  addFieldsValue(value?: DTOActionFieldValue, index?: number): DTOActionFieldValue;

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
    order: number,
    columnId: string,
    id: string,
    index: number,
    status?: DTOActionStatus.AsObject,
    type?: DTOActionType.AsObject,
    fieldsValueList: Array<DTOActionFieldValue.AsObject>,
  }
}

export class DTOActionFieldValue extends jspb.Message {
  hasActionField(): boolean;
  clearActionField(): void;
  getActionField(): DTOActionField | undefined;
  setActionField(value?: DTOActionField): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DTOActionFieldValue.AsObject;
  static toObject(includeInstance: boolean, msg: DTOActionFieldValue): DTOActionFieldValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DTOActionFieldValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DTOActionFieldValue;
  static deserializeBinaryFromReader(message: DTOActionFieldValue, reader: jspb.BinaryReader): DTOActionFieldValue;
}

export namespace DTOActionFieldValue {
  export type AsObject = {
    actionField?: DTOActionField.AsObject,
    value: string,
  }
}

export class DTOActionType extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getIcon(): string;
  setIcon(value: string): void;

  clearTemplatesList(): void;
  getTemplatesList(): Array<DTOActionTemplate>;
  setTemplatesList(value: Array<DTOActionTemplate>): void;
  addTemplates(value?: DTOActionTemplate, index?: number): DTOActionTemplate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DTOActionType.AsObject;
  static toObject(includeInstance: boolean, msg: DTOActionType): DTOActionType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DTOActionType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DTOActionType;
  static deserializeBinaryFromReader(message: DTOActionType, reader: jspb.BinaryReader): DTOActionType;
}

export namespace DTOActionType {
  export type AsObject = {
    name: string,
    description: string,
    icon: string,
    templatesList: Array<DTOActionTemplate.AsObject>,
  }
}

export class DTOActionTemplate extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearConfigsList(): void;
  getConfigsList(): Array<DTOActionConfig>;
  setConfigsList(value: Array<DTOActionConfig>): void;
  addConfigs(value?: DTOActionConfig, index?: number): DTOActionConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DTOActionTemplate.AsObject;
  static toObject(includeInstance: boolean, msg: DTOActionTemplate): DTOActionTemplate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DTOActionTemplate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DTOActionTemplate;
  static deserializeBinaryFromReader(message: DTOActionTemplate, reader: jspb.BinaryReader): DTOActionTemplate;
}

export namespace DTOActionTemplate {
  export type AsObject = {
    name: string,
    description: string,
    configsList: Array<DTOActionConfig.AsObject>,
  }
}

export class DTOActionConfig extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getDefaultValue(): string;
  setDefaultValue(value: string): void;

  getDemoValue(): string;
  setDemoValue(value: string): void;

  getIsRequired(): boolean;
  setIsRequired(value: boolean): void;

  getUseType(): UseTypeMap[keyof UseTypeMap];
  setUseType(value: UseTypeMap[keyof UseTypeMap]): void;

  hasActionField(): boolean;
  clearActionField(): void;
  getActionField(): DTOActionField | undefined;
  setActionField(value?: DTOActionField): void;

  clearCardViewsList(): void;
  getCardViewsList(): Array<DTOCardView>;
  setCardViewsList(value: Array<DTOCardView>): void;
  addCardViews(value?: DTOCardView, index?: number): DTOCardView;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DTOActionConfig.AsObject;
  static toObject(includeInstance: boolean, msg: DTOActionConfig): DTOActionConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DTOActionConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DTOActionConfig;
  static deserializeBinaryFromReader(message: DTOActionConfig, reader: jspb.BinaryReader): DTOActionConfig;
}

export namespace DTOActionConfig {
  export type AsObject = {
    id: string,
    defaultValue: string,
    demoValue: string,
    isRequired: boolean,
    useType: UseTypeMap[keyof UseTypeMap],
    actionField?: DTOActionField.AsObject,
    cardViewsList: Array<DTOCardView.AsObject>,
  }
}

export class DTOCardView extends jspb.Message {
  getRow(): number;
  setRow(value: number): void;

  getOrder(): number;
  setOrder(value: number): void;

  getVariant(): number;
  setVariant(value: number): void;

  getStatusName(): string;
  setStatusName(value: string): void;

  getStatusDescription(): string;
  setStatusDescription(value: string): void;

  getStatusColorHex(): string;
  setStatusColorHex(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DTOCardView.AsObject;
  static toObject(includeInstance: boolean, msg: DTOCardView): DTOCardView.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DTOCardView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DTOCardView;
  static deserializeBinaryFromReader(message: DTOCardView, reader: jspb.BinaryReader): DTOCardView;
}

export namespace DTOCardView {
  export type AsObject = {
    row: number,
    order: number,
    variant: number,
    statusName: string,
    statusDescription: string,
    statusColorHex: string,
  }
}

export class DTOActionField extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getTypeKey(): string;
  setTypeKey(value: string): void;

  getTypeName(): string;
  setTypeName(value: string): void;

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
    key: string,
    name: string,
    description: string,
    typeKey: string,
    typeName: string,
  }
}

export interface UseTypeMap {
  UNKNOWN: 0;
  CONSTRUCT: 2;
  TECH: 4;
  DESCRIPTION: 8;
  CONTEXT: 16;
}

export const UseType: UseTypeMap;

