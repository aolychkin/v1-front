import { TActionField, TCard, TColumn } from "pages/boards/model"

export const objToTCard = (item: any) => {
  try {
    // console.log(obj)
    return <TCard>{
      id: item.id,
      order: item.order,
      columnId: item.columnId,
      actionNum: item.actionNum,
      currentStepId: item.currentStepId,
      sprintIds: item.sprintIdsList,
      fields: objToTActionField(item.fieldsList),
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