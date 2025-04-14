import { mapTBoard } from "../lib";
import { TBoard } from "../model";
import { GetBoardRequest } from "../model/protos/board/board_pb";
import { useGetBoardQuery } from "./api";

export const useBoardData = () => {
  const request = new GetBoardRequest()
  request.setId("0ee92905-b8f6-4e98-af47-25c416")

  const { data, isFetching, isError, error } = useGetBoardQuery(request);

  var board = data?.board ? mapTBoard(data?.board) : undefined

  return { board, isFetching, isError, error };
}