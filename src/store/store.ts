import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        // userReducer:userReducer,
        //зверху редюсер як з слайсу
        // [userAPI.reducerPath]: userAPI.reducer
        //це приклад як добавляти rtk query в редюсер
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userAPI.middleware)
    //це приклад як добавляти rtk query в редюсер
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}