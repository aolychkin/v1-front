import {
  createApi,
  type Api,
  type BaseQueryFn,
} from '@reduxjs/toolkit/query/react';

import { ROOT_HOST } from 'shared/config';
import type { GrpcErrorResponse } from 'shared/lib';

import { GrpcTags } from './config';
import { type GrpcClientProps, grpcBaseQuery } from './grpc-client';
import { grpc } from '@improbable-eng/grpc-web';

// const injectEndpointOverridePreventer = <
//   T extends Api<
//     BaseQueryFn<GrpcClientProps, unknown, GrpcErrorResponse>,
//     NonNullable<unknown>,
//     any,
//     any
//   >,
// >(
//   api: T,
// ) => {
//   const originalInject = api.injectEndpoints;

//   const overriddenInject: typeof originalInject = (params) => {
//     const newParams = {
//       ...params,
//     };

//     if (newParams.overrideExisting === undefined) {
//       newParams.overrideExisting = 'throw';
//     }

//     return originalInject(newParams);
//   };
//   api.injectEndpoints = overriddenInject;
// };

export const grpcSlice = createApi({
  reducerPath: 'api',
  tagTypes: Object.keys(GrpcTags),
  baseQuery: grpcBaseQuery({
    host: 'http://127.0.0.1:8080',
    metadata: new grpc.Metadata({ "X-Requested-With": "XMLHttpRequest" }),
  }),
  endpoints() {
    return {};
  },
});
// injectEndpointOverridePreventer(grpcSlice);