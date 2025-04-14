import type { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { store } from './store';

export const WithStore = ({
  children
}: {
  children: ReactNode
}) => {
  return <Provider store={store}>{children}</Provider>;
};
