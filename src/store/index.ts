import storage from 'redux-persist/lib/storage';
import { configureStore, getDefaultMiddleware, Store } from '@reduxjs/toolkit';
import { Persistor, persistReducer, persistStore } from 'redux-persist';
import { useDispatch } from 'react-redux';
import rootReducer from './rootReducer';

export type RootState = ReturnType<typeof rootReducer>;

export interface PersistStore {
  persistor?: Persistor;
}

export interface AppStore extends Store<RootState>, PersistStore {}

const isDev = process.env.NODE_ENV !== 'production';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false,
  }),
];

const rootPersistConfig = {
  key: 'root',
  whitelist: ['auth', 'cart'],
  storage,
};

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
const store: AppStore = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: isDev,
});

const persistor: Persistor = persistStore(store);

store.persistor = persistor;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
