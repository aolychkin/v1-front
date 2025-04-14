import {
  createApi,
  type Api,
  type BaseQueryFn,
} from '@reduxjs/toolkit/query/react';

import { ROOT_HOST } from 'shared/config';
import type { ApiErrorResponse } from 'shared/lib';

import { Tags } from './config';
import { httpClient, type BaseQueryParams } from './http-client';

const injectEndpointOverridePreventer = <
  T extends Api<
    BaseQueryFn<BaseQueryParams, unknown, ApiErrorResponse>,
    NonNullable<unknown>,
    any,
    any
  >,
>(
  api: T,
) => {
  const originalInject = api.injectEndpoints;

  const overriddenInject: typeof originalInject = (params) => {
    const newParams = {
      ...params,
    };

    if (newParams.overrideExisting === undefined) {
      newParams.overrideExisting = 'throw';
    }

    return originalInject(newParams);
  };
  api.injectEndpoints = overriddenInject;
};

export const apiSlice = createApi({
  reducerPath: 'api',
  tagTypes: Object.keys(Tags),
  baseQuery: httpClient({
    baseUrl: '/api',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
    },
  }),
  endpoints() {
    return {};
  },
});
injectEndpointOverridePreventer(apiSlice);