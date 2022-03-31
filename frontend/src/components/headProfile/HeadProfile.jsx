import React from 'react';
import './headProfile.scss';
import { DImages } from '../../default';

const HeadProfile = ({ user }) => {
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
                            <span className="username">{user.username}</span>
                            <span className="description">
                                {user.description}
                            </span>
                        </div>
                    </div>
                    <div className="headProfileBottomRight">
                        <button className="followButton btn">Follow</button>
                        <button className="editProfileButton btn">
                            Edit profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeadProfile;
