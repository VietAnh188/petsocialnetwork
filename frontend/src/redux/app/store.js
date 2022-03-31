import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import feedPostReducer from '../features/feedPost/feedPostSlice';

export default configureStore({
    reducer: {
        auth: authReducer,
        feedPost: feedPostReducer,
    },
});
