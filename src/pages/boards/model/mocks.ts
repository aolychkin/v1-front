import axios from 'axios';
import { TBoard, TCard, TCardCustomField, TCardFields, TCardMeta, TCardVisualConfig } from "./types";
import data from './Board.json'

export const mockCardForConstruction: TCard = {
  id: "0",
  title: "Заголовок активности",
  meta: <TCardMeta>{
    columnID: "В работе",
    order: 1,
    creator: "Алексей Лычкин",
    createdAt: "2025-01-01",
    updatedAt: "2025-03-03",
    updatedItem: "Описание",
  },
  fields: <TCardFields>{
    project: "Создание БИОС",
    type: "Задача",
    board: "Проект: БИОС",
    sprint: "спринт 1: 2025.04.01-2025.04.15",
    assignee: "Яна Саломатина",
    customFields: <TCardCustomField[]>[
      {
        name: "Кастомное поле",
        type: "Список",
        valueSource: "ручной ввод",
        availableValues: ["1", "2", "3"]
      }
    ]
  }
}

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
    cardVisual: data.cardVisual
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