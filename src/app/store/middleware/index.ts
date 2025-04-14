import { apiSlice } from 'shared/lib';

import { forbiddenMiddleware } from './forbiddenMiddleware';
import { unauthenticatedMiddleware } from './unauthenticatedMiddleware';
import { grpcSlice } from 'shared/lib/grpc-slice';

export const rootMiddleware = [
  unauthenticatedMiddleware,
  forbiddenMiddleware,
  // apiSlice.middleware,
  grpcSlice.middleware,
];
