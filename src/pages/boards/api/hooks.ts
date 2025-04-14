import { mapTBoard } from "../lib";
import { mapTCard, mapTFieldConfig } from "../lib/transform/models/from-grpc";
import { TBoard } from "../model";
import { GetActionsByBoardRequest } from "../model/protos/action/action_pb";
import { GetBoardRequest } from "../model/protos/board/board_pb";
import { useGetBoardQuery, useGetCardsQuery } from "./api";

export const useBoardData = () => {
  const request = new GetBoardRequest()
  request.setId("0ee92905-b8f6-4e98-af47-25c416")

  const { data, isFetching, isError, error } = useGetBoardQuery(request);

  var board = data?.board ? mapTBoard(data?.board) : undefined

  return { board, isFetching, isError, error };
}

export const useCardsData = () => {
  const request = new GetActionsByBoardRequest()
  request.setBoardId("0ee92905-b8f6-4e98-af47-25c416")

  const { data, isFetching, isError, error } = useGetCardsQuery(request);

  var cardsData = data?.cardsList ? mapTCard(data?.cardsList) : undefined
  var fieldsConfigData = data?.fieldConfigsList ? mapTFieldConfig(data?.fieldConfigsList) : undefined

  return { cardsData, fieldsConfigData, isFetching, isError, error };
}