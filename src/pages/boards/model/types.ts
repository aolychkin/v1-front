
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


