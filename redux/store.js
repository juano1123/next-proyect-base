import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import { combineReducers } from 'redux'
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const createNoopStorage = () => {
   return {
      getItem(_key) {
         return Promise.resolve(null);
      },
      setItem(_key, value) {
         return Promise.resolve(value);
      },
      removeItem(_key) {
         return Promise.resolve();
      },
   };
};
const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();

const persistConfig = {
  key: 'root',
  storage
}

const reducers = combineReducers({ 
  auth: authReducer
})

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});

export default store;

export const persistor = persistStore(store)