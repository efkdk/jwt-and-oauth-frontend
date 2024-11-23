import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import api from '@/shared/redux/api';
import authSlice from '@/features/auth/authSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [authSlice.reducerPath],
};

const reducers = {
  [api.reducerPath]: api.reducer,
  [authSlice.reducerPath]: authSlice.reducer,
};

const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware),
});

const persistor = persistStore(store);

export { store, persistor };
