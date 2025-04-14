import { CssVarsProvider as JoyCssVarsProvider } from '@mui/joy/styles';
import { CssBaseline } from '@mui/joy';
import '@fontsource/inter';

import { WithRouter } from 'app/router/WithRouter';
import { WithStore } from './store';

export const App = () => {
  return (
    <JoyCssVarsProvider>
      <CssBaseline />
      <WithStore>
        <WithRouter />
      </WithStore>
    </JoyCssVarsProvider>
  );
}
