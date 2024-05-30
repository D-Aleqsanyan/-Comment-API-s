import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {fetchPosts} from '../../services/postService';

export const fetchPostsAsync = createAsyncThunk('posts/fetchPosts', async () => {
    return await fetchPosts();
});

const initialState = {
    posts: [],
    status: 'idle',
    error: null,
};

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPostsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPostsAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.posts = action.payload;
            })
            .addCase(fetchPostsAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default postSlice.reducer;
