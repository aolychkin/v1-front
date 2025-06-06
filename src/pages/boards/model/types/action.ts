import { Edge } from "@atlaskit/pragmatic-drag-and-drop-hitbox/dist/types/types";
import { DTOAction } from "../protos/board/board_pb";

// export type TCardMeta = {
//   prevRank: number,
//   nextRank: number,
// }

// //TODO: Убрать логику на фронте. 
// //TODO: БЛЯЯЯТЬ. Добавить воркфлоу
// export type TCard = {
//   id: string,
//   order: number,
//   columnId: string,
//   stepId: string,
//   action: TAction,
// }
// export type TAction = {
//   id: string,
//   key: string,
//   actionNum: number,
//   stepId: string,
//   sprintIds: string[],
//   fields: TActionField[],
// }
// export type TActionField = {
//   id: string,
//   value: string,
//   fieldConfigId: string, //TODO: это именно Кард конфиг? (визуальный конфиг) НЕТ! ЭТО !!!TFieldConfig!!! - этот.
// }


// export type TFieldConfig = {
//   id: string,
//   name: string,
//   alias: string,
//   fieldType: TFieldType,
//   defaultValue: string,
//   availableValues: string,
// }
// export type TFieldType = {
//   id: string,
//   name: string,
//   alias: string,
//   isCustom: boolean,
//   availableSizes: string[]
// }


// //TODO: а это используется?
// export type TCardFieldKey = keyof TActionField

export type TCardDragData = {
  action_id: string,
  status_id: string,
  column_id: string,
  order: number,
  prev_rank: number,
  next_rank: number,
}

export const objToTCardDragData = (item: any) => {
  try {
    return <TCardDragData>{
      action_id: item.cardDragData.action_id,
      status_id: item.cardDragData.status_id,
      column_id: item.cardDragData.column_id,
      order: item.cardDragData.order,
      prev_rank: item.cardDragData.prev_rank,
      next_rank: item.cardDragData.next_rank,
    }
  } catch (e) {
    console.log("[ERROR] func objToTCardDragData())", e, item)
    return <TCardDragData>{}
  }
}

//Состояния для DnD
export type TCardState =
  | {
    type: 'idle';
  }
  | {
    type: 'is-dragging';
  }
  | {
    type: 'is-dragging-and-left-self';
  }
  | {
    type: 'is-over';
    // dragging: DOMRect; // TODO: получить высоту элемента. Этот параметр нужен только для этого.
    closestEdge: Edge;
  }
  | {
    type: 'preview';
    container: HTMLElement;
    // dragging: DOMRect;
  };


export type TColumnDragData = {
  column_id: string,
  actions: Array<DTOAction.AsObject>
}

export const objToTColumnDragData = (item: any) => {
  try {
    return <TColumnDragData>{
      column_id: item.columnDragData.action_id,
      actions: item.columnDragData.actions,
    }
  } catch (e) {
    console.log("[ERROR] func objToTColumnDragData())", e, item)
    return <TColumnDragData>{}
  }
}
export type TColumnState =
  | {
    type: 'column-idle';
  }
  // | {
  //   type: 'is-card-over';
  //   isOverChildCard: boolean;
  //   status_id: string,
  //   // startTime: number;
  //   // status_id: string,
  //   // dragging: DOMRect; // TODO: получить высоту элемента. Этот параметр нужен только для этого.
  // }
  | {
    type: 'status-idle';
  }
  | {
    type: 'is-over';
  }
  | {
    type: 'is-status-over';
    // isOverChildCard: boolean;
    startTime: number;
  }
  | {
    type: 'is-status-chosen';
    status_id: string,
  };

export type TStatusDragData = {
  status_id: string,
}

// export const objToTStatusDragData = (item: any) => {
//   try {
//     return <TStatusDragData>{
//       status_id: item.statusDragData.action_id,
//     }
//   } catch (e) {
//     console.log("[ERROR] func objToTStatusDragData())", e, item)
//     return <TStatusDragData>{}
//   }
// }

// export type TStatusState =
//   | {
//     type: 'status-idle';
//   }
//   | {
//     type: 'is-card-over';
//     isOverChildCard: boolean;
//     startTime: number;
//     // dragging: DOMRect; // TODO: получить высоту элемента. Этот параметр нужен только для этого.
//   }
//   | {
//     type: 'is-status-choose';
//     status_id: string,
//   };