import type { BaseQueryFn } from '@reduxjs/toolkit/query/react';
import type { AxiosProgressEvent, AxiosRequestConfig } from 'axios';

import type { ApiErrorResponse, FormErrors } from 'shared/lib';

export type HttpClientProps = {
  baseUrl: string;
  headers?: AxiosRequestConfig['headers'];
};

export type ServerErrorResponseProps = {
  response: {
    data?: {
      code: number;
      message: string;
      errors: FormErrors;
    };
    status: number;
  };
  message: string;
};

export type BaseQueryParams = {
  url: string;
  method: AxiosRequestConfig['method'];
  body?: AxiosRequestConfig['data'];
  params?: AxiosRequestConfig['params'];
  headers?: AxiosRequestConfig['headers'];
  onUploadProgress?: (progressEvent: AxiosProgressEvent) => void;
};

export type QueryFN = BaseQueryFn<BaseQueryParams, unknown, ApiErrorResponse>;

export type HttpClient = (params: BaseQueryParams) => any;
