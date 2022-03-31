import React, { useState, useRef } from 'react';
import './share.scss';
import logo from '../../assets/img/logo.png';
import { VideoCameraBack, Photo, TagFaces } from '@mui/icons-material';
import FileBase64 from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import {
    feedPostSelector,
    createFeedPostCall,
} from '../../redux/features/feedPost/feedPostSlice';
import { authSelector } from '../../redux/features/auth/authSlice';
import { CircularProgress } from '@mui/material';

const Share = () => {
    const dispatch = useDispatch();
    const { isFetching } = useSelector(feedPostSelector);
    const { user } = useSelector(authSelector);

    const [image, setImage] = useState('');

    const title = useRef();

    const handleSubmit = event => {
        event.preventDefault();
        if (title.current.value || image) {
            const request = {
                userId: user._id,
                title: title.current.value,
                image,
            };
            dispatch(createFeedPostCall(request));
        } else {
            alert('Missing title or image');
        }
    };

    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <div className="shareTopLeft">
                        <div className="avatar">
                            <img src={logo} alt="" />
                        </div>
                        <span className="username">{user?.username}</span>
                    </div>
                    <div className="shareTopRight">
                        <span>Write what in your mind?</span>
                    </div>
                </div>
                <div className="shareBody">
                    <input
                        type="text"
                        placeholder="Happy day for you!"
                        className="shareTitle"
                        ref={title}
                    />
                    <div className="shareFile">
                        <FileBase64
                            mutiple={true}
                            onDone={({ base64 }) => {
                                setImage(base64);
                            }}
                        />
                    </div>
                    <button className="shareSubmit" onClick={handleSubmit}>
                        {isFetching ? (
                            <CircularProgress
                                sx={{ color: 'white' }}
                                size="15px"
                            />
                        ) : (
                            'Share'
                        )}
                    </button>
                </div>
                <div className="shareBottom">
                    <div className="shareBottomItem">
                        <VideoCameraBack sx={{ color: 'red' }} />
                        <span>Live video</span>
                    </div>
                    <div className="shareBottomItem">
                        <Photo sx={{ color: 'green' }} />
                        <span>Photo/Video</span>
                    </div>
                    <div className="shareBottomItem">
                        <TagFaces sx={{ color: 'yellow' }} />
                        <span>Feeling/Activity</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Share;
