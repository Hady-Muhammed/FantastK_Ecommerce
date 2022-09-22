import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/authSlice'
import dataSlice from './slices/dataSlice'
import filterSlice from './slices/filterSlice'
import inCartSlice from './slices/inCartSlice'
const store = configureStore({
  reducer: {
    auth: authSlice,
    filter: filterSlice,
    data: dataSlice,
    cart: inCartSlice,
  },
})

export default store
