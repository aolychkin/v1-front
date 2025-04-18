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
import { GetActionsByBoardRequest, GetActionsByBoardResponse, ReorderActionsOnBoardRequest, ReorderActionsOnBoardResponse } from '../model/protos/action/action_pb';
import { ActionService } from '../model/protos/action/action_pb_service';

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
          method: ActionService.GetActionsByBoard,
          request: req
        };
      },
      transformResponse: (actionsData: GetActionsByBoardResponse) => actionsData.toObject() as GetActionsByBoardResponse.AsObject
    }),
    reorderCards: builder.query<ReorderActionsOnBoardResponse.AsObject, ReorderActionsOnBoardRequest>({
      query(req) {
        return {
          method: ActionService.ReorderActionsOnBoard,
          request: req
        };
      },
      transformResponse: (cards: ReorderActionsOnBoardResponse) => cards.toObject() as ReorderActionsOnBoardResponse.AsObject
    }),
  }),
});

export const {
  useGetBoardQuery,
  useGetCardsQuery,
  useReorderCardsQuery,
} = boardSlice;
