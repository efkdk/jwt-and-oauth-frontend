import { configureStore } from '@reduxjs/toolkit';
import api from '@/shared/redux/api';
import authSlice from '@/features/auth/authSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { themeSlice } from '@/features/theme/themeSlice';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [authSlice.reducerPath]: authSlice.reducer,
    [themeSlice.reducerPath]: themeSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);
