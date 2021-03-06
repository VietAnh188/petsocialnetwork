import React, { useState, useEffect, useContext, memo } from 'react';
import axios from 'axios';
import './headProfile.scss';
import { DImages } from '../../default';
import { useSelector, useDispatch } from 'react-redux';
import {
    authSelector,
    followUser,
    unfollowUser,
} from '../../redux/features/auth/authSlice';
import { RenderContext } from '../../context/renderContext/renderContext';
import { loadedAction } from '../../context/renderContext/renderActions';

const HeadProfile = ({ user, handleShowForm }) => {
    const dispatch = useDispatch();

    const { dispatch: dispatchContext } = useContext(RenderContext);

    const { user: currentUser } = useSelector(authSelector);

    const [followed, setFollowed] = useState(
        currentUser.followings.includes(user?._id)
    );

    useEffect(() => {
        setFollowed(currentUser.followings.includes(user?._id));
    }, [user?._id, currentUser.followings]);

    const handleFollow = async () => {
        try {
            if (followed) {
                await axios.put(`/users/${user._id}/unfollow`, {
                    userId: currentUser._id,
                });
                dispatch(unfollowUser(user?._id));
            } else {
                await axios.put(`/users/${user._id}/follow`, {
                    userId: currentUser._id,
                });
                dispatch(followUser(user?._id));
            }
            dispatchContext(loadedAction());
            setFollowed(!followed);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="headProfile">
            <div className="headProfileTop">
                <img
                    src={
                        user?.coverPicture
                            ? user.coverPicture
                            : DImages + 'user/defaultCoverImage.jpg'
                    }
                    alt="coverPicture"
                    className="coverPicture"
                />
            </div>
            <div className="headProfileBottom">
                <div className="headProfileBottomWrapper">
                    <div className="headProfileBottomLeft">
                        <img
                            src={
                                user?.avatar
                                    ? user.avatar
                                    : DImages + 'user/defaultAvatar.png'
                            }
                            alt=""
                            className="avatar"
                        />
                        <div className="headProfileBottomLeftInfo">
                            <span className="username">{user?.username}</span>
                            <span className="description">
                                {user?.description}
                            </span>
                        </div>
                    </div>
                    <div className="headProfileBottomRight">
                        <button
                            className="followButton btn"
                            onClick={handleFollow}
                            disabled={currentUser._id === user?._id}
                        >
                            {followed ? 'Unfollow' : 'Follow'}
                        </button>
                        <button
                            className="editProfileButton btn"
                            onClick={() => handleShowForm()}
                        >
                            Edit profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(HeadProfile);
