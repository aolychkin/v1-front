import { Edge } from "@atlaskit/pragmatic-drag-and-drop-hitbox/dist/types/types";

// meta - служебные поля. Мб потом убрать из мета creator и createdAt (обновляются только 1 раз)
export type TCard = {
  id: string;
  title: string;
  meta: TCardMeta;
  fields?: TCardFields;
  content?: string[];
  activity?: string[];
};

export type TCardMeta = {
  columnID: string;
  order: number;
  creator?: string;
  createdAt?: string;
  updatedAt?: string;
  updatedItem?: string;
}

export type TCardFields = {
  project?: string;
  type?: string;
  board?: string;
  sprint?: string;
  assignee?: string;
  customFields: TCardCustomField[];
}

//TODO: типы визуализации тоже добавить. Соответственно для каждого поля / кастомного типа поля должен быть реализована визуализация = Nтипов * Nвизуализаций
export type TCardCustomField = {
  id: string;
  name: string;
  type: string;
  valueSource: string;
  availableValues: string[] // если ручной ввод, то здесь все введенные когда-либо значения в это поле (и существующие у задач сейчас)
}

export type TColumn = {
  id: string;
  title: string;
};

export type TBoard = {
  columns: TColumn[];
  cards: TCard[];
  cardVisual?: TCardVisualConfig;
};

//TODO: добавить валидацию по location при загрузке доски. Если на карточках нет таких полей - отображать серый блок с иконкой информации
export type TCardVisualConfig = {
  parentID: string;
  rows: TCardVisualConfigRow[]
};
export type TCardVisualConfigRow = {
  rowOrder: number
  slots: TCardVisualConfigSlot[]
};
export type TCardVisualConfigSlot = {
  slotSize: number; //9:"max" | 5: "half" |3: "medium" |0: "min"
  columnOrder: number
  fieldID: string
};


export const objToTCard = (obj: any) => {
  try {
    // console.log(obj)
    return <TCard>{
      id: obj.id,
      title: obj.title,
      meta: <TCardMeta>{
        columnID: obj.meta.columnID,
        order: obj.meta.order,
      }
    }
  } catch (e) {
    console.log("Can't func objToTCard())", e, obj)
    return <TCard>{}
  }
}

export const objToTColumn = (obj: any) => {
  try {
    return <TColumn>{
      id: obj.id,
      title: obj.title,
    }
  } catch {
    console.log("Can't func (objToTColumn)")
    return <TColumn>{}
  }
}

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