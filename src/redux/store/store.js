import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import userReducer from '../reducer/userReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const store = configureStore({
  reducer: {
    userData: persistReducer(persistConfig, userReducer),
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
export const persistor = persistStore(store);
