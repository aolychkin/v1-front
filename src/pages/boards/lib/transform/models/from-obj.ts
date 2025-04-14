import { TAction, TActionField, TCard, TColumn } from "pages/boards/model"

export const objToTCard = (item: any) => {
  try {
    // console.log(obj)
    return <TCard>{
      id: item.id,
      order: item.order,
      columnId: item.columnId,
      stepId: item.action.stepId,
      action: <TAction>{
        id: item.action.id,
        key: item.action.key,
        actionNum: item.action.actionNum,
        stepId: item.action.stepId,
        sprintIds: item.action.sprintIds,
        fields: objToTActionField(item.action.fields),
      }
    }
  } catch (e) {
    console.log("[ERROR] func objToTCard())", e, item)
    return <TCard>{}
  }
}

export const objToTActionField = (obj: any[]): TActionField[] => {
  return obj.map((item: any) => (<TActionField>{
    id: item.id,
    value: item.value,
    configId: item.configId,
  }))
};


export const objToTColumn = (obj: any) => {
  try {
    return <TColumn>{
      id: obj.id,
      name: obj.name,
      // steps: TCurrentStep[];
      // onBoardActions: TCard[];
    }
  } catch {
    console.log("Can't func (objToTColumn)")
    return <TColumn>{}
  }
}