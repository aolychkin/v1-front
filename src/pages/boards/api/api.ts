import {
  STRING_TYPES,
  apiSlice,
  changeCase,
  getReplacer,
  type DictionaryResponse,
} from 'shared/lib';

import { GetBoardResponse, GetBoardRequest } from '../model/board_pb';
import { grpcSlice } from 'shared/lib/grpc-slice';
import { BoardService } from '../model/board_pb_service';

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
  }),
});

export const {
  useGetBoardQuery,
} = boardSlice;
