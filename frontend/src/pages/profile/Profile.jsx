import React, { useEffect, useState, useTransition } from 'react';
import './profile.scss';
import Navbar from '../../components/navbar/Navbar';
import Newfeed from '../../components/newfeed/Newfeed';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import HeadProfile from '../../components/headProfile/HeadProfile';
import InforBox from '../../components/InforBox/InforBox';
import {
    otherUserSelector,
    getOtherUser,
} from '../../redux/features/otherUser/otherUserSlice';
import { authSelector } from '../../redux/features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import EditDialog from '../../components/editDialog/EditDialog';

const Profile = () => {
    const dispatch = useDispatch();

    const [isPending, startTransition] = useTransition();

    const [editShow, setEditShow] = useState(false);
    const [checkData, setCheckData] = useState(false);

    const { otherUser: user } = useSelector(otherUserSelector);
    const { user: currentUser } = useSelector(authSelector);

    const { username } = useParams();

    useEffect(() => {
        if (checkData) {
            dispatch(getOtherUser({ username }));
            startTransition(() => {
                setCheckData(false);
            });
        }
    }, [checkData]);

    useEffect(() => {
        startTransition(() => {
            setCheckData(true);
        });
    }, [username, currentUser]);

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
