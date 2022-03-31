import React from 'react';
import FormLogin from '../../components/formLogin/FormLogin';
import './login.scss';

const Login = () => {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <div className="loginLeftWrapper">
                        <span className="title">Welcome back to WPSN!</span>
                        <span className="subTitle">
                            Please enter your detail to login!
                        </span>
                        <span style={{ margin: '20px 0' }}>
                            <FormLogin />
                        </span>
                    </div>
                </div>
                <div className="loginRight">
                    <span className="purdah"></span>
                </div>
            </div>
        </div>
    );
};

export default Login;
