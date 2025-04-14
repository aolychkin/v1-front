/**
 * AxiosError с описанием data по контракту
 * https://repo.developzilla.com/adsterra/manifests/-/blob/master/php/api/api.md#3-%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80%D1%8B-%D0%BE%D1%88%D0%B8%D0%B1%D0%BE%D0%BA
 */

import type { FormErrors } from './form-errors';
import { grpc } from "@improbable-eng/grpc-web";

export type ApiErrorResponse = {
  message?: string;
  code?: string;
  status?: number;
  data?: {
    errors?: FormErrors;
    message?: string;
    code?: number;
    // There could be whatever back end wants: string, object, array
    rawErrors?: Record<string, unknown>;
  };
};

export type GrpcErrorResponse = {
  code?: grpc.Code;
  message?: string;
};
