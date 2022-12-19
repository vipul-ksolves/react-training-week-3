import { configureStore } from "@reduxjs/toolkit";

//reducers
import blogSlice from "./features/blogSlice";

export const store = configureStore({
  reducer: { blog: blogSlice },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
