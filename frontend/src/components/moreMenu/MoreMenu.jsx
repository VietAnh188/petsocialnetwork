import React, { useContext } from 'react';
import axios from 'axios';
import './moreMenu.scss';
import { Settings, Delete } from '@mui/icons-material';
import { authSelector } from '../../redux/features/auth/authSlice';
import { RenderContext } from '../../context/renderContext/renderContext';
import { loadedAction } from '../../context/renderContext/renderActions';
import { useSelector } from 'react-redux';

const MoreMenu = ({ postId }) => {
    const { user } = useSelector(authSelector);
    const { dispatch } = useContext(RenderContext);

    const handleDeletePost = async () => {
        await axios.delete(`/feedPosts/${postId}`, {
            data: { userId: user._id },
        });
        dispatch(loadedAction());
    };

    return (
        <div className="moreMenu">
            <div className="moreMenuWrapper">
                <ul>
                    <li>
                        <Settings className="moreMenuItemIcon" />
                        <span>Edit</span>
                    </li>
                    <li onClick={handleDeletePost}>
                        <Delete className="moreMenuItemIcon" />
                        <span>Delete</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MoreMenu;
