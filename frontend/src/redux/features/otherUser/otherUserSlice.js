import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    otherUser: null,
    isFetching: false,
    isError: false,
    isSuccess: false,
};

export const getOtherUser = createAsyncThunk(
    'otherUse/getOtherUser',
    async ({ username }) => {
        const res = await axios.get(`/users/?username=${username}`);
        return res.data;
    }
);

const otherUserSlice = createSlice({
    name: 'otherUser',
    initialState: initialState,
    extraReducers: builder => {
        // getOtherUser
        builder.addCase(getOtherUser.pending, state => {
            state.otherUser = null;
            state.isFetching = true;
            state.isError = false;
            state.isSuccess = false;
        });
        builder.addCase(getOtherUser.fulfilled, (state, action) => {
            state.otherUser = action.payload;
            state.isFetching = false;
            state.isError = false;
            state.isSuccess = true;
        });
        builder.addCase(getOtherUser.rejected, state => {
            state.otherUser = null;
            state.isFetching = false;
            state.isError = true;
            state.isSuccess = false;
        });
    },
});

export const otherUserSelector = state => state.otherUser;

export default otherUserSlice.reducer;
