import { configureStore } from '@reduxjs/toolkit';
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
import { contactReducer } from './phonebookSlice';
import { filterReducer } from './filterSlice';
import { userRedcer } from './user/userSlice';

const persistConfig = {
  key: 'user',
  version: 1,
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, userRedcer);

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
    user: persistedReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCgeck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PURGE, REGISTER, PERSIST],
      },
    }),
});

export const persistor = persistStore(store);
