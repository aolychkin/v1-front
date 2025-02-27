import React from 'react';
import { WithRouter } from './router/WithRouter';
import { CssVarsProvider as JoyCssVarsProvider } from '@mui/joy/styles';
import { CssBaseline } from '@mui/joy';
import '@fontsource/inter';

export const App = () => {
  return (
    <JoyCssVarsProvider>
      <CssBaseline />
      <WithRouter />
    </JoyCssVarsProvider>
  );
}
