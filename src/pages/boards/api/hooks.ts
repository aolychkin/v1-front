// import { mapTCard, mapTFieldConfig } from "../lib/transform/models/from-grpc";
// import { GetActionsByBoardRequest, ReorderActionsOnBoardRequest } from "../model/protos/action/action_pb";
import { GetBoardRequest, UpdateActionBoardOrderingRequest } from "../model/protos/board/board_pb";
import { useGetBoardQuery, useUpdateActionBoardOrderingQuery } from "./api";

export const useGetBoard = () => {
  const request = new GetBoardRequest()
  request.setId("b0458ecd-ab07-418a-8e73-02e5d5017052")

  const { data, isFetching, isLoading, isError, error } = useGetBoardQuery(request);
  var board = data?.board ? data.board : undefined

  return { board, isFetching, isLoading, isError, error };
}

// export const useCardsData = () => {
//   const request = new GetBoardRequest()
//   request.setId("b6565751-c7d0-4d26-a690-e98251f96b0c")

//   const { data, isFetching, isLoading, isError, error } = useGetBoardQuery(request);

//   // console.log("useCardsData", cards, fieldsConfig, isFetching, isLoading, isError, error)

//   return { data, isFetching, isLoading, isError, error };
// }


export const useUpdateActionBoardOrdering = (
  {
    action_id,
    new_rank,
    status_id,
    column_id,
  }: {
    action_id: string;
    new_rank: number;
    status_id: string;
    column_id: string;
  }
) => {
  console.log(action_id, new_rank, status_id)
  const request = new UpdateActionBoardOrderingRequest()
  request.setActionId(action_id)
  request.setRankValue(new_rank)
  request.setStatusId(status_id)
  request.setColumnId(column_id)

  const { data, isFetching, isLoading, isError, error } = useUpdateActionBoardOrderingQuery(request);
  var board = data?.board ? data.board : undefined

  return { board, isFetching, isLoading, isError, error };
}