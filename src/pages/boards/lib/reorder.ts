import { Edge } from "@atlaskit/pragmatic-drag-and-drop-hitbox/dist/types/types";
import { TBoard, TCard, TColumn } from "../model/types";

export const reorderCardsWithEdge = ({
  board,
  currentCard,
  targetCard,
  edge
}: {
  board: TBoard,
  currentCard: TCard;
  targetCard: TCard;
  edge: Edge | null
}): TColumn[] => {
  console.time('doSomething')
  return sortInt({ board, currentCard, targetCard, edge })
}

// splice - функция, которая помогает отлично здесь
const sortInt = ({
  board,
  currentCard,
  targetCard,
  edge
}: {
  board: TBoard,
  currentCard: TCard;
  targetCard: TCard;
  edge: Edge | null
}): TColumn[] => {
  if (edge === 'top' || edge === 'bottom') {
    const currentColumnIndex = board.columns.findIndex((column) => column.id === currentCard.columnID)
    const targetColumnIndex = board.columns.findIndex((column) => column.id === targetCard.columnID)
    const currentCardIndex = board.columns[currentColumnIndex].cards.findIndex((card) => card.id === currentCard.id)
    const targetCardIndex = board.columns[targetColumnIndex].cards.findIndex((card) => card.id === targetCard.id)

    currentCard.columnID = targetCard.columnID
    if (edge === 'top') {
      board.columns[currentColumnIndex].cards.splice(currentCardIndex - 1, 1)
      board.columns[targetColumnIndex].cards.splice(targetCardIndex, 0, currentCard)
    } else {
      board.columns[currentColumnIndex].cards.splice(currentCardIndex, 1)
      board.columns[targetColumnIndex].cards.splice(targetCardIndex + 1, 0, currentCard)
    }
    console.timeEnd('doSomething')
    return board.columns
  } else {
    console.log("Unknown Edge in func: reorderCardsWithEdge())")
    return board.columns
  }
}

// const sortString = ({
//   board,
//   currentCard,
//   targetCard,
//   edge
// }: {
//   board: TBoard,
//   currentCard: TCard;
//   targetCard: TCard;
//   edge: Edge | null
// }): TCard[] => {
//   if (edge === 'top' || edge === 'bottom') {
//     const currentCardIndex = board.cards.findIndex((card) => card.id === currentCard.id)
//     const targetCardIndex = board.cards.findIndex((card) => card.id === targetCard.id)
//     board.cards[currentCardIndex].columnID = targetCard.columnID
//     if (edge === 'top') {
//       board.cards[currentCardIndex].order = targetCard.order
//       board.cards[targetCardIndex].order += 1
//     } else {
//       board.cards[currentCardIndex].order = targetCard.order + 1
//       board.cards[targetCardIndex].order += 0
//       board.cards[targetCardIndex + 1].order += 1
//     }
//     console.timeEnd('doSomething')
//     return board.cards.sort((a, b) => a.order - b.order)
//   } else {
//     console.log("Unknown Edge in func: reorderCardsWithEdge())")
//     return board.cards
//   }
// }