import { BaseQueryFn } from "@reduxjs/toolkit/query/react";
import { Message } from "google-protobuf";
import { grpc } from "@improbable-eng/grpc-web";
import { GrpcClientProps, GrpcQueryFN, GrpcErrorResponseProps } from "./types";
const { invoke } = grpc;

/**
 * This is a very small wrapper around grpc-web that aims to simplify requests.
 * {@link [grpc-web](https://github.com/improbable-eng/grpc-web)}.
 * 
 * @example
 * ```ts
 * const baseQuery = fetchBaseQuery({
 *   host: 'https://api.your-really-great-app.com/v1/',
 * })
 * ```
 *
 * @param {string} host
 * The host for an grpc-web proxy.
 * Typically in the format of http://example.com/
 *
 */
export function grpcBaseQuery({
  host = '',
  metadata,
}: GrpcClientProps): GrpcQueryFN {
  if (typeof invoke === 'undefined' || typeof host === 'undefined') {
    console.warn(
      'Warning: `grpc invoke` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments.'
    )
  }
  return async ({
    method,
    request,
  }) => {
    const response = await new Promise((resolve, reject) => {
      const result: GrpcErrorResponseProps = {};

      invoke(method, {
        request,
        host,
        metadata,
        onMessage: (message: Message) => {
          method.responseStream ? (result.data as Message[]).push(message) : result.data = message;
        },
        onEnd: (code: grpc.Code, message: string | undefined) => {
          if (code === grpc.Code.OK) {
            resolve(result);
          } else {
            reject({ code, message });
          }
        }
      });
    }).catch((error) => {
      return {
        error
      } as GrpcErrorResponseProps
    });

    const { error, data } = response as GrpcErrorResponseProps;
    return (error) ?
      { error: error }
      : { data: data };
  }
}
