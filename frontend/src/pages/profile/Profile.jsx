import React, { useEffect, useState } from 'react';
import './profile.scss';
import Navbar from '../../components/navbar/Navbar';
import Newfeed from '../../components/newfeed/Newfeed';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import HeadProfile from '../../components/headProfile/HeadProfile';
import InforBox from '../../components/InforBox/InforBox';
import { authSelector } from '../../redux/features/auth/authSlice';
import { useSelector } from 'react-redux';
import EditDialog from '../../components/editDialog/EditDialog';
import axios from 'axios';

const Profile = () => {
    const [editShow, setEditShow] = useState(false);
    const [user, setUser] = useState({});

    const { user: currentUser } = useSelector(authSelector);

    const { username } = useParams();

    useEffect(() => {
        console.log('fetch');
        if (username !== currentUser.username) {
            (async () => {
                const res = await axios.get(`/users/?username=${username}`);
                res && setUser(res.data);
            })();
        } else {
            setUser(currentUser);
        }
    }, [username]);

    const handleShowEditForm = () => {
        setEditShow(!editShow);
    };

    return (
        <>
            <Navbar />
            <Container maxWidth="xl">
                <div className="profile">
                    <HeadProfile
                        user={user}
                        handleShowForm={handleShowEditForm}
                    />
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
            {editShow && <EditDialog handleCloseForm={handleShowEditForm} />}
        </>
    );
};

export default Profile;
