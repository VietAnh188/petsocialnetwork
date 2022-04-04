import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import './profile.scss';
import Navbar from '../../components/navbar/Navbar';
import Newfeed from '../../components/newfeed/Newfeed';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import HeadProfile from '../../components/headProfile/HeadProfile';
import InforBox from '../../components/InforBox/InforBox';
import { RenderContext } from '../../context/renderContext/renderContext';
import { stoppedAction } from '../../context/renderContext/renderActions';

const Profile = () => {
    const { username } = useParams();

    const [user, setUser] = useState({});

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get(`/users/?username=${username}`);
                setUser(res.data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [username]);

    return (
        <>
            <Navbar />
            <Container maxWidth="xl">
                <div className="profile">
                    <HeadProfile user={user} />
                    <div className="profileWrapper">
                        <span style={{ flex: 1 }}>
                            <InforBox user={user} />
                        </span>
                        <span style={{ flex: 1.5, margin: '0 20px' }}>
                            <Newfeed other={user} />
                        </span>
                        <span style={{ flex: 1 }}></span>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Profile;
