import axios from 'axios';
import { TBoard } from "./types";
import data from './Board.json'

// export const mockData: TBoard = {
//   columns: [
//     {
//       id: '1',
//       title: "1st col",
//     },
//     {
//       id: '2',
//       title: "2nd col",
//     },
//   ],
//   cards: [
//     {
//       id: '1',
//       description: "1st",
//       columnID: '1',
//       order: 1,
//     },
//     {
//       id: '3',
//       description: "3st",
//       columnID: '1',
//       order: 2,
//     },
//     {
//       id: '2',
//       description: "2st",
//       columnID: '2',
//       order: 1,
//     },
//   ]
// }

export const getMockData = (): TBoard => {
  const board: TBoard = {
    columns: data.columns,
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