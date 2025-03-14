import axios from 'axios';
import { TBoard, TCard, TCardField, TCardFieldConfig, TCardFieldType, TCardFieldVisual, TCardFieldVisualInModal, TCardFieldVisualOnBoard, TCardMeta } from "./types";
import data from './Board.json'

export const mockCard: TCard = {
  id: "0",
  meta: <TCardMeta>{
    type: "Задача",
    project: "Проект 1",
    board: "Проект: БИОС",
    sprint: "спринт 1: 2025.04.01-2025.04.15",
    columnID: "В работе",
    order: 1,
    creator: "Алексей Лычкин",
    createdAt: "2025-01-01",
    updatedAt: "2025-03-03",
    updatedItem: "Описание",
  },
  fields: <TCardField[]>[
    {
      id: "1",
      configID: "1",
      value: ["Коротко суть: что требуется от исполнителя"],
    },
    {
      id: "2",
      configID: "2",
      value: ["Подробное описание задачи, которое точно дает понять, что происходит и что нужно сделать"]
    }
  ]
}
export const mockCardFieldConfig: TCardFieldConfig[] =
  [
    {
      id: "1",
      name: "summary",
      alias: "Заголовок активности",
      valueTypeID: "summary",
      defaultValue: "Без названия",
      valueSource: "manual",
      availableValues: {
        color: "red",
        value: "all",
      },
      visual: <TCardFieldVisual>{
        board: <TCardFieldVisualOnBoard>{
          rowOrder: 1,
          columnOrder: 1,
          size: 12,
        },
        modal: <TCardFieldVisualInModal>{
          category: "description",
          order: 0,
        },
      }
    },
    {
      id: "1",
      name: "description",
      alias: "Описание задачи",
      valueTypeID: "2",
      defaultValue: "",
      valueSource: "manual",
      availableValues: {
        color: "red",
        value: "all",
      },
      visual: <TCardFieldVisual>{
        board: <TCardFieldVisualOnBoard>{
          rowOrder: 2,
          columnOrder: 1,
          size: 12,
        },
        modal: <TCardFieldVisualInModal>{
          category: "description",
          order: 0,
        },
      }
    }
  ]


export const mockCardFieldType: TCardFieldType[] = [
  {
    id: "1",
    name: "summary",
    isCustom: false,
    availableSizes: [12]
  },
  {
    id: "2",
    name: "description",
    isCustom: false,
    availableSizes: [12]
  }

]

// {
//   id: "2",
//   name: "assignee",
//   alias: "Исполнитель",
//   type: {
//     defaultValue: "Исполнитель DV",
//     content: "Яна Саломатина"
//   },
//   isCustom: false
// },
// {
//   id: "3",
//   name: "custom",
//   alias: "Кастомное поле",
//   type: {
//     color: "red",
//     defaultValue: "1",
//     valueSource: "ручной ввод",
//     availableValues: ["1", "2", "3"]
//   },
//   isCustom: true
// },

// export const mockCardVisualConfig: TCardVisualConfig = {
//   parentID: '',
//   fields: <TCardFieldVisual[]>
//     [
//       {
//         fieldID: 'title',
//         slotWidth: 9,
//         startRow: 1,
//         order: 1,
//       },
//       {
//         slotWidth: 9,
//         startRow: 2,
//         order: 1,
//       },
//       {
//         slotWidth: 5,
//         startRow: 3,
//         order: 1,
//       },
//       {
//         slotWidth: 3,
//         startRow: 4,
//         order: 1,
//       },
//       {
//         slotWidth: 0,
//         startRow: 5,
//         order: 1,
//       },
//     ]
// }


export const getMockData = (): TBoard => {
  const board: TBoard = {
    columns: data.columns,
    cards: data.cards,
    fieldConfigs: data.fieldConfigs,
    fieldTypes: data.fieldTypes,
  }
  return board
}

// export const getMockData = () => {
//   var data;
//   async function fetchData() {
//     try {
//       const response = await axios.get('Board.json');
//       data = response.data;
//       console.log(data);
//     } catch (error) {
//       console.error(error);
//     }
//   }
//   fetchData();

//   return data
// }