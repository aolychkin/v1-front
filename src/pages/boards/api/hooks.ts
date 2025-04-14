import { BoardRequest } from ".";
import { GetBoardRequest } from "../model/board_pb";
import { useGetBoardQuery } from "./api";

export const useBoardData = () => {
  const request = new GetBoardRequest()
  request.setId("0ee92905-b8f6-4e98-af47-25c416")

  const { data, isFetching, isError, error } = useGetBoardQuery(request);

  return { data, isFetching, isError, error };
}