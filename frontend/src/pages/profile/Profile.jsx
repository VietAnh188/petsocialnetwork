import React from 'react';
import './profile.scss';
import Navbar from '../../components/navbar/Navbar';
import Newfeed from '../../components/newfeed/Newfeed';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import HeadProfile from '../../components/headProfile/HeadProfile';
import { useSelector } from 'react-redux';
import { authSelector } from '../../redux/features/auth/authSlice';

const Profile = () => {
    const { username } = useParams();

    const { user } = useSelector(authSelector);

    return (
        <>
            <Navbar />
            <Container maxWidth="xl">
                <div className="profile">
                    <HeadProfile user={user} />
                    <div className="profileWrapper">
                        <span style={{ flex: 1 }}></span>
                        <span style={{ flex: 1.5 }}>
                            <Newfeed username={username} />
                        </span>
                        <span style={{ flex: 1 }}></span>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Profile;
