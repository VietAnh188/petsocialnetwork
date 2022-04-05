import React, { useContext } from 'react';
import './logoutDialog.scss';
import { useNavigate } from 'react-router-dom';
import { LogoutContext } from '../../context/logoutContext/logoutContext';
import { logoutStoppedAction } from '../../context/logoutContext/logoutActions';

const LogoutDialog = () => {
    const { dispatch: dispatchContext } = useContext(LogoutContext);

    const navigate = useNavigate();

    const handleSubmitLogout = () => {
        localStorage.clear();
        navigate('/login');
        dispatchContext(logoutStoppedAction());
    };

    const handleStopLogout = () => {
        dispatchContext(logoutStoppedAction());
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
