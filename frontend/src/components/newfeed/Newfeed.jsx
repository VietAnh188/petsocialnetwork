import React, { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelector } from '../../redux/features/auth/authSlice';
import {
    feedPostSelector,
    fetchFeedPostsCall,
} from '../../redux/features/feedPost/feedPostSlice';
import { RenderContext } from '../../context/renderContext/renderContext';
import { stoppedAction } from '../../context/renderContext/renderActions';
import Post from '../post/Post';
import Share from '../share/Share';
import './newfeed.scss';

const Newfeed = ({ home, other }) => {
    const dispatch = useDispatch();
    const { isLoading, dispatch: dispatchContext } = useContext(RenderContext);

    const { user } = useSelector(authSelector);
    const { posts } = useSelector(feedPostSelector);

    useEffect(() => {
        if (home) {
            dispatch(
                fetchFeedPostsCall({
                    userId: user?._id,
                })
            );
        } else {
            dispatch(
                fetchFeedPostsCall({
                    username: other?.username,
                })
            );
        }
        dispatchContext(stoppedAction());
    }, [isLoading, other?.username, user?._id, dispatch]);

    return (
        <div className="newfeed">
            <Share user={other || user} />
            <div className="postList">
                {posts
                    .slice()
                    .sort((prev, next) => {
                        return (
                            new Date(next.createdAt) - new Date(prev.createdAt)
                        );
                    })
                    .map(post => (
                        <Post key={post._id} current={post} />
                    ))}
            </div>
        </div>
    );
};

export default Newfeed;
