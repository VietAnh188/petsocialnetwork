import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mount: false,
};

const logoutSlice = createSlice({
    name: 'logout',
    initialState: initialState,
    reducers: {
        logoutClicked: state => {
            state.mount = true;
        },
        logoutClosed: state => {
            state.mount = false;
        },
    },
});

export const { logoutClicked, logoutClosed } = logoutSlice.actions;

export const logoutSelector = state => state.logout;

export default logoutSlice.reducer;
