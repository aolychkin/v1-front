import type { PayloadAction } from '@reduxjs/toolkit';
import type { HttpStatusCode } from 'axios';

export type UnauthorizedAction = PayloadAction<{
  status: HttpStatusCode.Unauthorized;
}>;

export type ForbiddenAction = PayloadAction<{
  status: HttpStatusCode.Forbidden;
  data?: { message?: string };
}>;