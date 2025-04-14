
import { TActionField, TBoard, TCard, TCardConfig, TColumn, TCurrentStep, TFieldConfig, TFieldType, TSprint } from "pages/boards/model";
import { DTOCard, DTOActionField, DTOFieldConfig, DTOFieldType } from "pages/boards/model/protos/action/action_pb";
import { DTOBoard, DTOColumn, DTOCurrentStep, DTOSprint } from "pages/boards/model/protos/board/board_pb";

export const mapTBoard = (dto: DTOBoard.AsObject): TBoard => ({
  id: dto.id,
  key: dto.key,
  columns: mapTColumn(dto.columnsList),
  sprints: mapTSprint(dto.sprintsList),
  fieldConfigs: mapTFieldConfig(dto.fieldConfigsList),
  cardConfigs: mapTCardConfig(dto.cardConfigsList),
});

export const mapTColumn = (dto: Array<DTOColumn.AsObject>): TColumn[] => {
  return dto.map((item: DTOColumn.AsObject) => (<TColumn>{
    id: item.id,
    name: item.name,
    steps: mapTCurrentStep(item.stepsList),
    onBoardActions: mapTCard(item.onBoardActionList),
  }))
};

export const mapTCurrentStep = (dto: Array<DTOCurrentStep.AsObject>): TCurrentStep[] => {
  return dto.map((item: DTOCurrentStep.AsObject) => (<TCurrentStep>{
    id: item.id,
    name: item.name,
    workflowStatus: item.workflowStatus
  }))
};

export const mapTCard = (dto: Array<DTOCard.AsObject>): TCard[] => {
  return dto.map((item: DTOCard.AsObject) => (<TCard>{
    id: item.id,
    order: item.order,
    columnId: item.columnId,
    actionNum: item.actionNum,
    currentStepId: item.currentStepId,
    sprintIds: item.sprintIdsList,
    fields: mapTActionField(item.fieldsList),
  }))
};

export const mapTActionField = (dto: Array<DTOActionField.AsObject>): TActionField[] => {
  return dto.map((item: DTOActionField.AsObject) => (<TActionField>{
    id: item.id,
    value: item.value,
    configId: item.configId,
  }))
};

export const mapTSprint = (dto: Array<DTOSprint.AsObject>): TSprint[] => {
  return dto.map((item: DTOSprint.AsObject) => (<TSprint>{
    id: item.id,
    name: item.name,
  }))
};

export const mapTFieldConfig = (dto: Array<DTOFieldConfig.AsObject>): TFieldConfig[] => {
  return dto.map((item: DTOFieldConfig.AsObject) => (<TFieldConfig>{
    id: item.id,
    name: item.name,
    alias: item.alias,
    fieldType: mapTFieldType(item.fieldType),
    defaultValue: item.defaultvalue,
    availableValues: item.availablevalues,
    //TODO: исправить написание
  }))
};

export const mapTFieldType = (dto: DTOFieldType.AsObject | undefined): TFieldType => {
  return (dto
    ? <TFieldType>{
      id: dto.id,
      name: dto.name,
      alias: dto.alias,
      isCustom: dto.isCustom,
      availableSizes: dto.availableSizesList,
    }
    : <TFieldType>{
      id: 'undefined',
      name: 'undefined',
      alias: 'undefined',
      isCustom: false,
      availableSizes: [],
    }
  )
};

export const mapTCardConfig = (dto: Array<DTOCardConfig.AsObject>): TCardConfig[] => {
  return dto.map((item: DTOCardConfig.AsObject) => (<TCardConfig>{
    id: item.id,
    rowOrder: item.rowOrder,
    columnOrder: item.columnOrder,
    size: item.size,
    fieldConfigId: item.fieldConfigId,
  }))
};


// export const map = (dto: Array<DTOSprint.AsObject>): TBoard => ({
// });

// export const map = (dto: DTOBoard.AsObject): TBoard => ({
// });