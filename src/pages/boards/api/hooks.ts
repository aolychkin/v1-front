import { mapTBoard } from "../lib";
import { mapTCard, mapTFieldConfig } from "../lib/transform/models/from-grpc";
import { TBoard } from "../model";
import { GetActionsByBoardRequest, ReorderActionsOnBoardRequest } from "../model/protos/action/action_pb";
import { GetBoardRequest } from "../model/protos/board/board_pb";
import { useGetBoardQuery, useGetCardsQuery, useReorderCardsQuery } from "./api";

export const useBoardData = () => {
  const request = new GetBoardRequest()
  request.setId("0ee92905-b8f6-4e98-af47-25c416")

  const { data, isFetching, isLoading, isError, error } = useGetBoardQuery(request);

  var board = data?.board ? mapTBoard(data?.board) : undefined

  return { board, isFetching, isLoading, isError, error };
}

export const useCardsData = () => {
  const request = new GetActionsByBoardRequest()
  request.setBoardId("0ee92905-b8f6-4e98-af47-25c416")

  const { data, isFetching, isLoading, isError, error } = useGetCardsQuery(request);

  var cards = data?.cardsList ? mapTCard(data?.cardsList) : undefined
  var fieldsConfig = data?.fieldConfigsList ? mapTFieldConfig(data?.fieldConfigsList) : undefined

  // console.log("useCardsData", cards, fieldsConfig, isFetching, isLoading, isError, error)

  return { cards, fieldsConfig, isFetching, isLoading, isError, error };
}


export const useReorderCards = (
  {
    card_id,
    new_rank,
    column_id,
  }: {
    card_id: string;
    new_rank: number;
    column_id: string;
  }
) => {
  const request = new ReorderActionsOnBoardRequest()
  request.setCardId(card_id)
  request.setNewRank(new_rank)
  request.setColumnId(column_id)

  const { data, isFetching, isLoading, isError, error } = useReorderCardsQuery(request);

  var cardsData = data?.cardsList ? mapTCard(data?.cardsList) : undefined

  // console.log("useReorderCards", cardsData, isFetching, isLoading, isError, error)

  return { cardsData, isFetching, isLoading, isError, error };
}