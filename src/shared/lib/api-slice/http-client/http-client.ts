import axios, { type AxiosError } from 'axios';

import {
  STRING_TYPES,
  changeCase,
  getReplacer,
  getToken,
  transformErrors,
  type ApiErrorResponse,
} from 'shared/lib';

import type {
  HttpClientProps,
  QueryFN,
  ServerErrorResponseProps,
} from './types';

const methods = ['post', 'put', 'patch'] as const;
methods.forEach((method) => {
  axios.defaults.headers[method]['Content-Type'] = 'application/json';
});

axios.interceptors.response.use(
  (result) => result.data,
  async (err: AxiosError) => Promise.reject(err),
);

// https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#axios-basequery
export const httpClient = ({
  baseUrl = '',
  headers: defaultHeaders = {},
}: HttpClientProps): QueryFN => {
  return async ({
    url,
    method,
    body: data,
    params,
    headers: additionalHeaders,
    onUploadProgress,
  }) => {
    const token = getToken();
    const headers = {
      'x-access-token': token,
      ...defaultHeaders,
      ...additionalHeaders,
    };

    try {
      return await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
        timeout: 0,
        transformRequest: (requestData) => {
          if (requestData instanceof FormData) {
            return requestData;
          }

          return JSON.stringify(
            changeCase(requestData, getReplacer(STRING_TYPES.SNAKE_CASE)),
          );
        },
        transformResponse: (responseData) =>
          changeCase(
            JSON.parse(responseData),
            getReplacer(STRING_TYPES.CAMEL_CASE),
          ),
        withCredentials: true,
        onUploadProgress,
      });
    } catch (axiosError) {
      const err = axiosError as ServerErrorResponseProps;

      const message = err.response?.data?.message;
      const errors = transformErrors(err.response?.data?.errors || {});
      const error = {
        status: err.response?.status,
        data: {
          ...err.response?.data,
          message,
          errors,
          rawErrors: err.response?.data?.errors,
        },
      } as ApiErrorResponse;

      return { error };
    }
  };
};
