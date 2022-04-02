import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    post: null,
    isFetching: false,
    isError: false,
    posts: [],
};

export const createFeedPostCall = createAsyncThunk(
    'feedPost/createFeedPostCall',
    async request => {
        const res = await axios.post('/feedPosts', request);
        return res.data;
    }
);

export const fetchFeedPostsCall = createAsyncThunk(
    'feedPost/fetchFeedPostsCall',
    async ({ userId = null, username = null }) => {
        const res = username
            ? await axios.get(`/feedPosts/profile/${username}`)
            : userId
            ? await axios.get(`/feedPosts/feed/${userId}`)
            : null;
        return res.data;
    }
);

const feedPostSlice = createSlice({
    name: 'post',
    initialState: initialState,
    extraReducers: builder => {
        // createFeedPostCall
        builder.addCase(createFeedPostCall.pending, state => {
            state.post = null;
            state.isFetching = true;
            state.isError = false;
            state.posts = [];
        });
        builder.addCase(createFeedPostCall.fulfilled, (state, action) => {
            state.post = action.payload;
            state.isFetching = false;
            state.isError = false;
            state.posts = [];
        });
        builder.addCase(createFeedPostCall.rejected, state => {
            state.post = null;
            state.isFetching = false;
            state.isError = true;
            state.posts = [];
        });
        // fetchFeedPostsCall
        builder.addCase(fetchFeedPostsCall.pending, state => {
            state.post = null;
            state.isFetching = true;
            state.isError = false;
            state.posts = [];
        });
        builder.addCase(fetchFeedPostsCall.fulfilled, (state, action) => {
            state.post = null;
            state.isFetching = false;
            state.isError = false;
            state.posts = action.payload;
        });
        builder.addCase(fetchFeedPostsCall.rejected, state => {
            state.post = null;
            state.isFetching = false;
            state.isError = true;
            state.posts = [];
        });
    },
});

export const feedPostSelector = state => state.feedPost;

export default feedPostSlice.reducer;
