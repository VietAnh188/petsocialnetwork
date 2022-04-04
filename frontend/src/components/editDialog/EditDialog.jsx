import React, { useRef, useState, useTransition } from 'react';
import axios from 'axios';
import './editDialog.scss';
import FileBase64 from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector, editProfile } from '../../redux/features/auth/authSlice';
import { Close } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const EditDialog = ({ handleCloseForm }) => {
    const dispatch = useDispatch();
    const { user } = useSelector(authSelector);

    const navigate = useNavigate();

    const username = useRef();
    const email = useRef();
    const password = useRef();
    const address = useRef();
    const description = useRef();

    const [avatar, setAvatar] = useState('');
    const [coverPicture, setCoverPicture] = useState('');

    const [isPending, startTransition] = useTransition();

    const handleEditAvatar = ({ base64 }) => {
        startTransition(() => {
            setAvatar(base64);
        });
    };

    const handleEditCoverPicture = ({ base64 }) => {
        startTransition(() => {
            setCoverPicture(base64);
        });
    };

    const handleSubmit = async () => {
        const request = {
            userId: user._id,
            ...(username.current.value && { username: username.current.value }),
            ...(email.current.value && { email: email.current.value }),
            ...(password.current.value && { password: password.current.value }),
            ...(address.current.value && { address: address.current.value }),
            ...(description.current.value && {
                description: description.current.value,
            }),
            ...(avatar && { avatar }),
            ...(coverPicture && { coverPicture }),
        };
        await axios.put(`/users/${user._id}`, request);
        if (username.current.value) {
            navigate(`/`);
        }
        dispatch(editProfile(request));
    };

    console.log(user);

    const handleClearField = () => {
        username.current.value = '';
        email.current.value = '';
        password.current.value = '';
        address.current.value = '';
        description.current.value = '';
    };

    return (
        <div className="editDialog">
            <div className="editDialogWrapper">
                <div className="editDialogTop">
                    <span className="editDialogTopTitle">Edit profile</span>
                </div>
                <div className="editDialogBody">
                    <span className="editDialogBodyField">
                        <label>Username</label>
                        <input
                            type="text"
                            placeholder="naviage to home after change username"
                            ref={username}
                        />
                    </span>
                    <span className="editDialogBodyField">
                        <label>Email</label>
                        <input type="email" placeholder="email" ref={email} />
                    </span>
                    <span className="editDialogBodyField">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="password"
                            ref={password}
                        />
                    </span>
                    <span className="editDialogBodyField">
                        <label>Address</label>
                        <input type="text" placeholder="email" ref={address} />
                    </span>
                    <span className="editDialogBodyField">
                        <label>Description</label>
                        <input
                            type="text"
                            placeholder="description"
                            ref={description}
                        />
                    </span>
                    <span className="editDialogBodyField">
                        <label>Avatar</label>
                        <FileBase64 onDone={handleEditAvatar} />
                    </span>
                    <span className="editDialogBodyField">
                        <label>Cover Image</label>
                        <FileBase64 onDone={handleEditCoverPicture} />
                    </span>
                </div>
                <div className="editDialogBottom">
                    <button
                        className="editDialogBottomSubmit btn"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                    <button
                        className="editDialogBottomClear btn"
                        onClick={handleClearField}
                    >
                        Clear
                    </button>
                </div>
                <span className="closeButton" onClick={() => handleCloseForm()}>
                    <Close />
                </span>
            </div>
        </div>
    );
};

export default EditDialog;
