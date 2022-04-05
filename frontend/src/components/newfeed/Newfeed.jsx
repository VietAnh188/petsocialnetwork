import React, { useEffect, useContext, useState, memo } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { authSelector } from '../../redux/features/auth/authSlice';
import { RenderContext } from '../../context/renderContext/renderContext';
import { stoppedAction } from '../../context/renderContext/renderActions';
import Post from '../post/Post';
import Share from '../share/Share';
import './newfeed.scss';

const Newfeed = ({ home, other }) => {
    const { isLoading, dispatch: dispatchContext } = useContext(RenderContext);

    const { user } = useSelector(authSelector);

    const [postList, setPostList] = useState([]);

    useEffect(() => {
        (async () => {
            const res = home
                ? await axios.get(`/feedPosts/feed/${user?._id}`)
                : other?.username &&
                  (await axios.get(`/feedPosts/profile/${other?.username}`));
            res && setPostList(res.data);
        })();
        isLoading && dispatchContext(stoppedAction());
    }, [other, isLoading, user]);

    return (
        <div className="newfeed">
            <Share user={other || user} />
            <div className="postList">
                {postList.length > 0 &&
                    postList
                        .slice()
                        .sort((prev, next) => {
                            return (
                                new Date(next.createdAt) -
                                new Date(prev.createdAt)
                            );
                        })
                        .map(post => <Post key={post._id} current={post} />)}
            </div>
        </div>
    );
};

export default memo(Newfeed);
