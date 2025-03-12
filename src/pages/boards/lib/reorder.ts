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
}): TCard[] => {
  console.time('reorderCardsWithEdge')
  return sortInt({ board, currentCard, targetCard, edge })
}

const reorderCurrentColumn = ({ cards }: { cards: TCard[] }) => {
  cards.forEach((card) => card.order + 1)
  return cards
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
}): TCard[] => {
  if (edge === 'top' || edge === 'bottom') {
    const currentCardIndex = board.cards.findIndex((card) => card.id === currentCard.id)
    const targetCardIndex = board.cards.findIndex((card) => card.id === targetCard.id)
    if (edge === 'top') {
      board.cards.filter((item: TCard) => (item.columnID === targetCard.columnID) && (item.order >= targetCard.order) ? edge === 'top' : (item.order > targetCard.order)).map((card): TCard => {
        card.order += 1
        return card
      })
      board.cards[currentCardIndex].order = targetCard.order
    } else {
      board.cards.filter((item: TCard) => (item.columnID === targetCard.columnID) && (item.order > targetCard.order)).map((card): TCard => {
        card.order += 1
        return card
      })
      board.cards[currentCardIndex].order = targetCard.order + 1
    }
    board.cards[currentCardIndex].columnID = targetCard.columnID

    console.timeEnd('reorderCardsWithEdge')
    return board.cards
  } else {
    console.timeEnd('reorderCardsWithEdge')
    console.log("Unknown Edge in func: reorderCardsWithEdge())")
    return board.cards
  }
}

export const addCardInColumnBottom = ({
  board,
  currentCard,
  targetColumn
}: {
  board: TBoard,
  currentCard: TCard;
  targetColumn: TColumn
}): TCard[] => {
  console.time('addCardInColumnBottom')
  const currentCardIndex = board.cards.findIndex((card) => card.id === currentCard.id)
  const maxOrder = Math.max(...board.cards.filter((item: TCard) => ((item.columnID === targetColumn.id) && (item.id != currentCard.id))).map(o => o.order))
  board.cards[currentCardIndex].columnID = targetColumn.id
  board.cards[currentCardIndex].order = maxOrder >= 1 ? maxOrder + 1 : 1
  console.timeEnd('addCardInColumnBottom')
  return board.cards
}