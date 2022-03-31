import React from 'react';
import FormRegister from '../../components/formRegister/FormRegister';
import './register.scss';
// import Dialog from '../../dialog/Dialog';
// import { useSelector } from 'react-redux';
// import { authSelector } from '../../redux/features/auth/authSlice';

const Register = () => {
    // const { user, isError } = useSelector(authSelector);

    return (
        <div className="register">
            <div className="registerWrapper">
                <div className="registerLeft">
                    <div className="registerLeftWrapper">
                        <span className="title">Welcome to WPSN!</span>
                        <span className="subTitle">
                            This is Web Pet Social Network
                        </span>
                        <span className="subTitle">
                            Please enter your detail to sign up!
                        </span>
                        <span style={{ margin: '20px 0' }}>
                            <FormRegister />
                        </span>
                    </div>
                </div>
                <div className="registerRight">
                    <span className="purdah"></span>
                </div>
            </div>
            {/* {(user || isError) && <Dialog success={user} error={isError} />} */}
        </div>
    );
};

export default Register;
