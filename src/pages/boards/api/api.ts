import {
  STRING_TYPES,
  apiSlice,
  changeCase,
  getReplacer,
  type DictionaryResponse,
} from 'shared/lib';

import { GetBoardResponse, GetBoardRequest } from '../model/protos/board/board_pb';
import { grpcSlice } from 'shared/lib/grpc-slice';
import { BoardService } from '../model/protos/board/board_pb_service';
import { GetActionsByBoardRequest, GetActionsByBoardResponse } from '../model/protos/action/action_pb';
import { Action } from '../model/protos/action/action_pb_service';

const boardSlice = grpcSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBoard: builder.query<GetBoardResponse.AsObject, GetBoardRequest>({
      query(req) {
        return {
          method: BoardService.GetBoard,
          request: req
        };
      },
      transformResponse: (board: GetBoardResponse) => board.toObject() as GetBoardResponse.AsObject
    }),
    getCards: builder.query<GetActionsByBoardResponse.AsObject, GetActionsByBoardRequest>({
      query(req) {
        return {
          method: Action.GetActionsByBoard,
          request: req
        };
      },
      transformResponse: (actionsData: GetActionsByBoardResponse) => actionsData.toObject() as GetActionsByBoardResponse.AsObject
    }),
  }),
});

export const {
  useGetBoardQuery,
  useGetCardsQuery,
} = boardSlice;
