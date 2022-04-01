import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import feedPostReducer from '../features/feedPost/feedPostSlice';
import logoutReducer from '../features/logout/logoutSlice';

export default configureStore({
    reducer: {
        auth: authReducer,
        feedPost: feedPostReducer,
        logout: logoutReducer,
    },
});
