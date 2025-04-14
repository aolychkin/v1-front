import { isRejectedWithValue, type Middleware } from '@reduxjs/toolkit';
import { HttpStatusCode } from 'axios';

import { Paths } from 'shared/config';
import { deleteToken } from 'shared/lib';

import { isUnauthorizedAction } from './utils';

export const unauthenticatedMiddleware: Middleware =
  () => (next) => (action) => {
    if (
      isRejectedWithValue(action) &&
      isUnauthorizedAction(action) &&
      action.payload?.status === HttpStatusCode.Unauthorized
    ) {
      deleteToken();
      //TODO: Заменить на LOGOUT
      window.location.assign(Paths.NOT_FOUND);
    }

    return next(action);
  };
