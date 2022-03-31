import React from 'react';
import './profile.scss';
import Navbar from '../../components/navbar/Navbar';
import Newfeed from '../../components/newfeed/Newfeed';
import { useSelector } from 'react-redux';
import { authSelector } from '../../redux/features/auth/authSlice';

const Profile = () => {
    const { user } = useSelector(authSelector);

    return (
        <>
            <Navbar />
            <div className="profile">
                <div className="profileWrapper">
                    <span style={{ flex: 1 }}></span>
                    <span style={{ flex: 1.5 }}>
                        <Newfeed username={user?.username} />
                    </span>
                    <span style={{ flex: 1 }}></span>
                </div>
            </div>
        </>
    );
};

export default Profile;
