import React from 'react';
import './logoutDialog.scss';
import { logoutClosed } from '../../redux/features/logout/logoutSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LogoutDialog = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleSubmitLogout = () => {
        localStorage.clear();
        navigate('/login');
        dispatch(logoutClosed());
    };

    const handleStopLogout = () => {
        dispatch(logoutClosed());
    };

    return (
        <div className="logoutDialog">
            <div className="logoutDialogWrapper">
                <div className="logoutDialogTop">
                    <span>Are you sure about that?</span>
                </div>
                <div className="logoutDialogBottom">
                    <button className="yes btn" onClick={handleSubmitLogout}>
                        Yes
                    </button>
                    <button className="no btn" onClick={handleStopLogout}>
                        No
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LogoutDialog;
