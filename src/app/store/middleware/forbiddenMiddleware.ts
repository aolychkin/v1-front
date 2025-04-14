import { isRejectedWithValue, type Middleware } from '@reduxjs/toolkit';
import { HttpStatusCode } from 'axios';

// import { showSnackbar } from 'shared/model';

import type { ForbiddenAction } from './types';
import { isForbiddenAction } from './utils';

const getMessage = (action: ForbiddenAction) => {
  const generalText = 'Access denied. Please contact support';

  return action.payload?.data?.message || generalText;
};

export const forbiddenMiddleware: Middleware =
  (store) => (next) => (action) => {
    if (
      isRejectedWithValue(action) &&
      isForbiddenAction(action) &&
      action.payload?.status === HttpStatusCode.Forbidden
    ) {
      console.log(getMessage(action))
      // store.dispatch(
      //   showSnackbar({
      //     message: getMessage(action),
      //     autoHideDuration: null,
      //     severity: 'error',
      //     canClose: true,
      //   }),
      // );

      return;
    }

    return next(action);
  };
