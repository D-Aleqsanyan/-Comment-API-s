import { configureStore } from '@reduxjs/toolkit';
import postReducer from './postSlice';
import commentReducer from './commentSlice';
import { thunk } from 'redux-thunk';

const store = configureStore({
    reducer: {
        posts: postReducer,
        comments: commentReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
