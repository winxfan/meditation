import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { api } from './api'
import courseReducer from './course/courseSlice'
import userReducer from './user/userSlice'
import lessonReducer from './lesson/lessonSlice'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    course: courseReducer,
    user: userReducer,
    lesson: lessonReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()

setupListeners(store.dispatch)
