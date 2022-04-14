import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './post.scss';
import { MoreHoriz } from '@mui/icons-material';
import { DImages } from '../../default';
import { Link } from 'react-router-dom';
import MoreMenu from '../moreMenu/MoreMenu';

const Post = ({ current }) => {
    const [owner, setOwner] = useState({});
    const [isShowMenu, setIsShowMenu] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get(
                    `/users/?userId=${current?.userId}`
                );
                setOwner(res.data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [current.userId]);

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <div className="avatar">
                            <Link to={`/profile/${owner?.username}`}>
                                <img
                                    src={
                                        owner?.avatar
                                            ? owner.avatar
                                            : DImages + 'user/defaultAvatar.png'
                                    }
                                    alt=""
                                />
                            </Link>
                        </div>
                        <div className="postTopLeftInfo">
                            <span className="username">{owner.username}</span>
                            <span className="time">5m</span>
                        </div>
                    </div>
                    <div className="postTopRight">
                        <MoreHoriz
                            sx={{ color: 'var(--primary-text)' }}
                            fontSize="large"
                            className="moreIcon"
                            onClick={() => setIsShowMenu(!isShowMenu)}
                        />
                        {isShowMenu && <MoreMenu postId={current._id} />}
                    </div>
                </div>
                <div className="postBody">
                    {current.title && (
                        <span className="postBodyCaption">{current.title}</span>
                    )}
                    {current.image && (
                        <div className="postBodyImage">
                            <img src={current.image} alt="" />
                        </div>
                    )}
                </div>
                <div className="postBottom"></div>
            </div>
        </div>
    );
};

export default Post;
