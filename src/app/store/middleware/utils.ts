import type { PayloadAction } from '@reduxjs/toolkit';

import type { ForbiddenAction, UnauthorizedAction } from './types';

export const isUnauthorizedAction = (
  action: PayloadAction<unknown>,
): action is UnauthorizedAction =>
  typeof action.payload === 'object' &&
  action.payload !== null &&
  'status' in action.payload;

export const isForbiddenAction = (
  action: PayloadAction<unknown>,
): action is ForbiddenAction =>
  typeof action.payload === 'object' &&
  action.payload !== null &&
  'status' in action.payload;