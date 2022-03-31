import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelector, loginCall } from '../../redux/features/auth/authSlice';
import { CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import './formLogin.scss';

const FormLogin = () => {
    const dispatch = useDispatch();
    const { isFetching } = useSelector(authSelector);

    const email = useRef();
    const password = useRef();

    const handleLogin = event => {
        event.preventDefault();
        const request = {
            email: email.current.value,
            password: password.current.value,
        };
        dispatch(loginCall(request));
    };

    return (
        <>
            <form onSubmit={handleLogin}>
                <label className="labelLogin" htmlFor="emailInputLogin">
                    Email
                </label>
                <input
                    id="emailInputLogin"
                    className="emailInput inputLogin"
                    type="text"
                    placeholder="Enter your email"
                    required
                    ref={email}
                />
                <label className="labelLogin" htmlFor="passwordInputLogin">
                    Password
                </label>
                <input
                    id="passwordInputLogin"
                    className="passwordInput inputLogin"
                    type="password"
                    placeholder="Enter your password"
                    required
                    ref={password}
                />
                <button className="submitButton" disabled={isFetching}>
                    {isFetching ? (
                        <CircularProgress sx={{ color: 'white' }} size="15px" />
                    ) : (
                        'Sign In'
                    )}
                </button>
                <Link to="/register" className="navigateToRegister">
                    Don't have account
                </Link>
            </form>
        </>
    );
};

export default FormLogin;
