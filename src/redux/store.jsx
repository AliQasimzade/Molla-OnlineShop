import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist';
import productsSlice from './slices/productsSlice';
import storage from 'redux-persist/lib/storage'
import rootReducer from './slices/rootSlice'
import thunk from 'redux-thunk'
const persistConfig = {
    key: 'root',
    storage,
  }


  const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: {
    persistedReducer,
    products:productsSlice
  },
  devTools:true,
  middleware:[thunk],
})

export const persistor = persistStore(store)