import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'

export const store = configureStore({
  reducer: {
   
    detail: userSlice,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
  //   serializableCheck: false
  // }),
})