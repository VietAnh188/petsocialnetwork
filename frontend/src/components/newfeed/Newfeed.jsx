import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelector } from '../../redux/features/auth/authSlice';
import {
    feedPostSelector,
    fetchFeedPostsCall,
} from '../../redux/features/feedPost/feedPostSlice';
import Post from '../post/Post';
import Share from '../share/Share';
import './newfeed.scss';

const Newfeed = ({ username }) => {
    const { user } = useSelector(authSelector);
    const { posts } = useSelector(feedPostSelector);

    const dispatch = useDispatch();

    useEffect(() => {
        user &&
            dispatch(
                fetchFeedPostsCall({ userId: user._id, username: username })
            );
    }, [dispatch]);

    return (
        <div className="newfeed">
            <Share />
            <div className="postList">
                {posts.map(post => (
                    <Post key={post._id} current={post} />
                ))}
            </div>
        </div>
    );
};

export default Newfeed;
