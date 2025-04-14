import { Edge } from "@atlaskit/pragmatic-drag-and-drop-hitbox/dist/types/types";

//TODO: Убрать логику на фронте. 
//TODO: БЛЯЯЯТЬ. Добавить воркфлоу
export type TCard = {
  id: string,
  order: number,
  columnId: string,
  stepId: string,
  action: TAction,
}
export type TAction = {
  id: string,
  key: string,
  actionNum: number,
  stepId: string,
  sprintIds: string[],
  fields: TActionField[],
}
export type TActionField = {
  id: string,
  value: string,
  configId: string,
}


export type TFieldConfig = {
  id: string,
  name: string,
  alias: string,
  fieldType: TFieldType,
  defaultValue: string,
  availableValues: string,
}
export type TFieldType = {
  id: string,
  name: string,
  alias: string,
  isCustom: boolean,
  availableSizes: string[],
}


//TODO: а это используется?
export type TCardFieldKey = keyof TActionField

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

export type TColumnState =
  | {
    type: 'column-idle';
  }
  | {
    type: 'is-card-over';
    isOverChildCard: boolean;
    // dragging: DOMRect; // TODO: получить высоту элемента. Этот параметр нужен только для этого.
  };