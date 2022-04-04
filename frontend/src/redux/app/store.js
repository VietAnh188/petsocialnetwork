import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import feedPostReducer from '../features/feedPost/feedPostSlice';
import logoutReducer from '../features/logout/logoutSlice';
import otherUserReducer from '../features/otherUser/otherUserSlice';

export default configureStore({
    reducer: {
        auth: authReducer,
        feedPost: feedPostReducer,
        logout: logoutReducer,
        otherUser: otherUserReducer,
    },
});
