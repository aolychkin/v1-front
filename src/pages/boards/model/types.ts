import { Edge } from "@atlaskit/pragmatic-drag-and-drop-hitbox/dist/types/types";

// // meta - служебные поля. Мб потом убрать из мета creator и createdAt (обновляются только 1 раз)
// export type TCard = {
//   id: string;
//   meta: TCardMeta;
//   fields: TCardField[];
//   // activity?: string[];
// };
// export type TCardMeta = {
//   type: string;
//   project: string;
//   board: string;
//   columnID: string;
//   order: number;
//   sprint?: string;
//   createdBy?: string;
//   createdAt?: string;
//   updatedAt?: string;
//   updatedBy?: string;
//   // updatedItem?: string;
// }

// //TODO: !!! Хранить только field Id, value и visual
// // Три сущности: тип, настройка типа, значение типа на карточке + его используемость
// // Принадлежит карточке
// export type TCardField = {
//   id: string;
//   configID: string;
//   value?: string[];
// }
// //Настраивает пользователь
// export type TCardFieldConfig = {
//   id: string;
//   name: string; //На системных полях запрещаем менять name
//   alias: string;
//   valueTypeID: string;
//   defaultValue: string;
//   valueSource: string; //Если источник данных подтягивается из другого поля. МБ это availableValues
//   availableValues?: { //[]
//     color: string;
//     value: string;
//   }; // если ручной ввод, то здесь все введенные когда-либо значения в это поле (и существующие у задач сейчас). МБ маску сюда же вставлять
//   visual: TCardFieldVisual;
// }
// //Настраиваю я в системе
// export type TCardFieldType = {
//   id: string;
//   name: string;
//   alias: string;
//   isCustom: boolean;
//   availableSizes: number[];
// }

// //Generic type
// export type TCardFieldGroupedByRow = {
//   [key: string]: TCardField[]
// }

// export type TCardFieldVisual = {
//   board: TCardFieldVisualOnBoard;
//   modal: TCardFieldVisualInModal;
// }
// //Когда добавляю ROW в конструкторе, то добавляю его локальное. Нет привязанного поля - ничего не сохраняется. Есть - обновляется visual у поля
// export type TCardFieldVisualOnBoard = {
//   rowOrder: number;
//   columnOrder: number;
//   size: number; //12:"max" | 6: "half" |3: "medium" |1: "min"
// }
// export type TCardFieldVisualInModal = {
//   category: string; //Поля с описанием / Контекстные поля / Скрытые поля
//   order: number;
// }

export type TCardConfig = {
  id: string,
  rowOrder: number,
  columnOrder: number,
  size: number,
  fieldConfigId: string,
}

export type TFieldType = {
  id: string,
  name: string,
  alias: string,
  isCustom: boolean,
  availableSizes: string[],
}
export type TFieldConfig = {
  id: string,
  name: string,
  alias: string,
  fieldType?: TFieldType,
  defaultValue: string,
  availableValues: string,
}
export type TSprint = {
  id: string,
  name: string,
}

export type TActionField = {
  id: string,
  value: string,
  configId: string,
}

//TODO: Убрать логику на фронте. 
//TODO: БЛЯЯЯТЬ. Добавить воркфлоу
export type TCard = {
  id: string,
  order: number,
  columnId: string, //TODO: лишнее поле
  actionNum: number,
  currentStepId: string,
  sprintIds: string[],
  fields: TActionField[],
}

export type TCurrentStep = {
  id: string;
  name: string;
  workflowStatus: string;
}

//Карточка не должна внутри колонки сидеть.
//Сопоставлять по куррент степу мб
export type TColumn = {
  id: string;
  name: string;
  steps: TCurrentStep[];
  onBoardActions: TCard[];
};

export type TBoard = {
  id: string;
  key: string;
  columns: TColumn[];
  sprints: TSprint[];
  fieldConfigs: TFieldConfig[];
  cardConfigs: TCardConfig[];
};

// export type TBoard = {
//   columns: TColumn[];
//   cards: TCard[];
//   cardVisual?: TCardVisualConfig;
// };

// //TODO: добавить валидацию по location при загрузке доски. Если на карточках нет таких полей - отображать серый блок с иконкой информации
// //TODO: добавить свою модель под каждый тип поля
// export type TCardVisualConfig = {
//   parentID: string;
//   rows: TCardVisualConfigRow[]
// };
// export type TCardVisualConfigRow = {
//   order: number;
//   slots?: TCardVisualConfigSlot[];
// };
// export type TCardVisualConfigSlot = {
//   size: number;
//   order: number
//   fieldID?: string //TCardField
// };


//TODO: а это используется?
export type TCardFieldKey = keyof TActionField

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