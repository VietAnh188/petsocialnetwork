import React, { useRef, useState, useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    authSelector,
    registerCall,
} from '../../redux/features/auth/authSlice';
import './formRegister.scss';
import { CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const FormRegister = () => {
    const id = useId();

    const dispatch = useDispatch();

    const { isFetching } = useSelector(authSelector);

    const navigate = useNavigate();

    const [match, setMatch] = useState(true);

    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();

    const handleRegister = async event => {
        event.preventDefault();
        if (password.current.value === passwordAgain.current.value) {
            setMatch(true);
            const newUser = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            };
            try {
                dispatch(registerCall(newUser));
                navigate('/login');
            } catch (error) {
                console.log(error);
            }
        } else {
            setMatch(false);
        }
    };

    return (
        <>
            <form onSubmit={handleRegister}>
                <label htmlFor={id + 'username'} className="labelRegister">
                    Username
                </label>
                <input
                    id={id + 'username'}
                    className="usernameInput inputRegister"
                    type="text"
                    placeholder="Enter your usename"
                    required
                    ref={username}
                />
                <label className="labelRegister" htmlFor={id + 'email'}>
                    Email
                </label>
                <input
                    id={id + 'email'}
                    className="emailInput inputRegister"
                    type="email"
                    placeholder="Enter your email"
                    required
                    ref={email}
                />
                <label className="labelRegister" htmlFor={id + 'password'}>
                    Password
                </label>
                <input
                    id={id + 'password'}
                    className="passwordInput inputRegister"
                    type="password"
                    placeholder="Enter your password"
                    required
                    ref={password}
                />
                <label className="labelRegister" htmlFor={id + 'passwordAgain'}>
                    Password again{' '}
                    {!match && (
                        <span style={{ color: 'red', fontSize: '15px' }}>
                            Password not match
                        </span>
                    )}
                </label>
                <input
                    id={id + 'passwordAgain'}
                    type="password"
                    className="passwordInpuAgain inputRegister"
                    placeholder="Enter your password, again"
                    required
                    ref={passwordAgain}
                />
                <button className="submitButton" disabled={isFetching}>
                    {isFetching ? (
                        <CircularProgress sx={{ color: 'white' }} size="15px" />
                    ) : (
                        'Sign Up'
                    )}
                </button>
                <Link to="/login" className="navigateToLogin">
                    Already have an account
                </Link>
            </form>
        </>
    );
};

export default FormRegister;
