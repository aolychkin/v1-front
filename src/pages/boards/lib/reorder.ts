import { Edge } from "@atlaskit/pragmatic-drag-and-drop-hitbox/dist/types/types";
import { TBoard, TCard, TColumn } from "../model";
import { useReorderCards } from "../api/hooks";

// export const ReorderThisBitch = ({
//   currentCard,
//   targetCard,
//   edge
// }: {
//   currentCard: TCard;
//   targetCard: TCard;
//   edge: Edge | null
// }) => {
//   const { cardsData } = useReorderCards({
//     // cardsData = UseReorderCards({
//     current_card_id: currentCard.id,
//     current_card_rank: currentCard.order,
//     target_card_id: targetCard.id,
//     target_card_rank: targetCard.order,
//     edge: edge,
//     isCorner: false,
//   })

//   return cardsData
// }


//TODO: если reorder отличается от серверного, то перерисовать, если нет, то нет
export const reorderCardsWithEdge = ({
  cardsData,
  currentCard,
  targetCard,
  edge
}: {
  cardsData?: TCard[],
  currentCard: TCard;
  targetCard: TCard;
  edge: Edge | null
}): TCard[] => {
  console.time('reorderCardsWithEdge')
  if (cardsData) {
    return sortInt({ cardsData, currentCard, targetCard, edge });
  } else {
    return <TCard[]>{}
  }
}

const reorderCurrentColumn = ({ cards }: { cards: TCard[] }) => {
  cards.forEach((card) => card.order + 1)
  return cards
}

// splice - функция, которая помогает отлично здесь
const sortInt = ({
  cardsData,
  currentCard,
  targetCard,
  edge
}: {
  cardsData: TCard[],
  currentCard: TCard;
  targetCard: TCard;
  edge: Edge | null
}): TCard[] => {
  if (edge === 'top' || edge === 'bottom') {
    const currentCardIndex = cardsData.findIndex((card) => card.id === currentCard.id)
    // const targetCardIndex = board.cards.findIndex((card) => card.id === targetCard.id)
    if (edge === 'top') {
      cardsData.filter((item: TCard) => (item.columnId === targetCard.columnId) && (item.order >= targetCard.order) ? edge === 'top' : (item.order > targetCard.order)).map((card): TCard => {
        card.order += 1
        return card
      })
      cardsData[currentCardIndex].order = targetCard.order
    } else {
      cardsData.filter((item: TCard) => (item.columnId === targetCard.columnId) && (item.order > targetCard.order)).map((card): TCard => {
        card.order += 1
        return card
      })
      cardsData[currentCardIndex].order = targetCard.order + 1
    }
    cardsData[currentCardIndex].columnId = targetCard.columnId

    console.timeEnd('reorderCardsWithEdge')
    return cardsData
  } else {
    console.timeEnd('reorderCardsWithEdge')
    console.log("Unknown Edge in func: reorderCardsWithEdge())")
    return cardsData
  }
}

export const addCardInColumnBottom = ({
  cardsData,
  currentCard,
  targetColumn
}: {
  cardsData?: TCard[],
  currentCard: TCard;
  targetColumn: TColumn
}): TCard[] => {
  if (cardsData) {
    console.time('addCardInColumnBottom')
    const currentCardIndex = cardsData.findIndex((card) => card.id === currentCard.id)
    const maxOrder = Math.max(...cardsData.filter((item: TCard) => ((item.columnId === targetColumn.id) && (item.id != currentCard.id))).map(o => o.order))
    cardsData[currentCardIndex].columnId = targetColumn.id
    cardsData[currentCardIndex].order = maxOrder >= 1 ? maxOrder + 1 : 1
    console.timeEnd('addCardInColumnBottom')
    return cardsData
  } else {
    return <TCard[]>{}
  }

}



// export const reorderCardsWithEdge = ({
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
//   console.time('reorderCardsWithEdge')
//   return sortInt({ board, currentCard, targetCard, edge })
// }

// const reorderCurrentColumn = ({ cards }: { cards: TCard[] }) => {
//   cards.forEach((card) => card.order + 1)
//   return cards
// }

// // splice - функция, которая помогает отлично здесь
// const sortInt = ({
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
//     // const targetCardIndex = board.cards.findIndex((card) => card.id === targetCard.id)
//     if (edge === 'top') {
//       board.cards.filter((item: TCard) => (item.columnId === targetCard.columnId) && (item.order >= targetCard.order) ? edge === 'top' : (item.order > targetCard.order)).map((card): TCard => {
//         card.order += 1
//         return card
//       })
//       board.cards[currentCardIndex].order = targetCard.order
//     } else {
//       board.cards.filter((item: TCard) => (item.columnId === targetCard.columnId) && (item.order > targetCard.order)).map((card): TCard => {
//         card.order += 1
//         return card
//       })
//       board.cards[currentCardIndex].order = targetCard.order + 1
//     }
//     board.cards[currentCardIndex].columnId = targetCard.columnId

//     console.timeEnd('reorderCardsWithEdge')
//     return board.cards
//   } else {
//     console.timeEnd('reorderCardsWithEdge')
//     console.log("Unknown Edge in func: reorderCardsWithEdge())")
//     return board.cards
//   }
// }

// export const addCardInColumnBottom = ({
//   board,
//   currentCard,
//   targetColumn
// }: {
//   board: TBoard,
//   currentCard: TCard;
//   targetColumn: TColumn
// }): TCard[] => {
//   console.time('addCardInColumnBottom')
//   const currentCardIndex = board.cards.findIndex((card) => card.id === currentCard.id)
//   const maxOrder = Math.max(...board.cards.filter((item: TCard) => ((item.columnId === targetColumn.id) && (item.id != currentCard.id))).map(o => o.order))
//   board.cards[currentCardIndex].columnId = targetColumn.id
//   board.cards[currentCardIndex].order = maxOrder >= 1 ? maxOrder + 1 : 1
//   console.timeEnd('addCardInColumnBottom')
//   return board.cards
// }