import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    isFetching: false,
    isError: false,
    isSuccess: false,
};

export const loginCall = createAsyncThunk('auth/loginCall', async request => {
    const res = await axios.post('/auth/login', request);
    localStorage.setItem('user', JSON.stringify(res.data));
    return res.data;
});

export const registerCall = createAsyncThunk(
    'auth/registerCall',
    async request => {
        const res = await axios.post('/auth/register', request);
        return res.data;
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    extraReducers: builder => {
        // loginCall
        builder.addCase(loginCall.pending, state => {
            state.user = null;
            state.isFetching = true;
            state.isError = false;
            state.isSuccess = false;
        });
        builder.addCase(loginCall.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isFetching = false;
            state.isError = false;
            state.isSuccess = true;
        });
        builder.addCase(loginCall.rejected, state => {
            state.user = null;
            state.isFetching = false;
            state.isError = true;
            state.isSuccess = false;
        });
        // registerCall
        builder.addCase(registerCall.pending, state => {
            state.isFetching = true;
            state.isError = false;
            state.isSuccess = false;
        });
        builder.addCase(registerCall.fulfilled, state => {
            state.isFetching = false;
            state.isError = false;
            state.isSuccess = true;
        });
        builder.addCase(registerCall.rejected, state => {
            state.isFetching = false;
            state.isError = true;
            state.isSuccess = false;
        });
    },
});

export const authSelector = state => state.auth;

export default authSlice.reducer;
