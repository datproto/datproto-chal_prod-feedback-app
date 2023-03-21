import { configureStore } from '@reduxjs/toolkit'

import navSliceReducer from '@/reducers/feedbackReducer'

const store = configureStore({
  reducer: {
    nav: navSliceReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
