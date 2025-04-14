import { combineReducers } from '@reduxjs/toolkit';

import { apiSlice } from 'shared/lib';
import { grpcSlice } from 'shared/lib/grpc-slice';

export const rootReducer = combineReducers({
  // [apiSlice.reducerPath]: apiSlice.reducer,
  [grpcSlice.reducerPath]: grpcSlice.reducer,
});
