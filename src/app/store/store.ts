import { configureStore } from '@reduxjs/toolkit';

// import { enhancers } from './enhancers'; TODO: разобраться зачем это
import { rootMiddleware } from './middleware';
import { rootReducer } from './reducer';

export const setupStore = (preloadedState?: Partial<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware(
        {
          serializableCheck: false
        }
      ).concat(rootMiddleware),
    // enhancers: (getDefaultEnhancers) => getDefaultEnhancers().concat(enhancers),
  });

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
