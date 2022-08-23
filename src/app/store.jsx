import { configureStore, compose } from "@reduxjs/toolkit";
import postsReducer from '../features/posts/postsSlice';
import usersReducer from '../features/users/usersSlice';


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer
    }
});
