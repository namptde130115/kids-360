import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './user'
import { businessInforReducer } from './businessInfor';

export const store = configureStore({
  reducer: {
    user: userReducer,
    businessInfor: businessInforReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch