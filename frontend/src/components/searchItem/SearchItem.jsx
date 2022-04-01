import React from 'react';
import './searchItem.scss';
import { DImages } from '../../default';
import { ContactPage } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const SearchItem = ({ user }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/profile/${user.username}`);
    };

    return (
        <div className="searchItem" onClick={handleClick}>
            <div className="searchItemWrapper">
                <div className="searchItemLeft">
                    <div className="avatar">
                        <img
                            src={
                                user?.avatar
                                    ? user.avatar
                                    : DImages + 'user/defaultAvatar.png'
                            }
                            alt="avatar"
                        />
                    </div>
                    <div className="searchItemInfor">
                        <span className="username">{user?.username}</span>
                        <span className="description">{user?.description}</span>
                    </div>
                </div>
                <ContactPage
                    sx={{ color: 'var(--primary-purple)', flex: '1' }}
                />
            </div>
        </div>
    );
};

export default SearchItem;
