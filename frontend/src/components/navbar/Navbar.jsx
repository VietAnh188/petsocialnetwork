import React, { useRef } from 'react';
import './navbar.scss';
import { AppBar, Button, Container, Toolbar } from '@mui/material';
import {
    Search,
    NotificationsNone,
    AccountCircle,
    Logout,
} from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { DImages } from '../../default';
import { useSelector, useDispatch } from 'react-redux';
import { authSelector } from '../../redux/features/auth/authSlice';
import { logoutClicked } from '../../redux/features/logout/logoutSlice';

const Navbar = () => {
    const { user } = useSelector(authSelector);

    const disapatch = useDispatch();

    const navigate = useNavigate();

    const searchUser = useRef('');

    const handleSearch = event => {
        if (event.key === 'Enter') {
            navigate(`/search/${searchUser.current.value}`);
        }
    };

    const handleLogout = () => {
        disapatch(logoutClicked());
    };

    return (
        <AppBar position="fixed" sx={{ backgroundColor: '#fff' }}>
            <Container maxWidth="xl">
                <Toolbar variant="dense">
                    <div className="navbarLeft">
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                        <div className="navbarItem">
                            <NavLink to="/" style={{ textDecoration: 'none' }}>
                                <Button
                                    sx={{
                                        color: 'var(--primary-purple)',
                                        fontWeight: '900',
                                    }}
                                >
                                    Home
                                </Button>
                            </NavLink>
                            <NavLink
                                to="/qna"
                                style={{ textDecoration: 'none' }}
                            >
                                <Button
                                    sx={{
                                        color: 'var(--primary-purple)',
                                        fontWeight: '900',
                                    }}
                                >
                                    Q&A
                                </Button>
                            </NavLink>
                            <NavLink
                                to="/help"
                                style={{ textDecoration: 'none' }}
                            >
                                <Button
                                    sx={{
                                        color: 'var(--primary-purple)',
                                        fontWeight: '900',
                                    }}
                                >
                                    Help
                                </Button>
                            </NavLink>
                            <NavLink
                                to="/shop"
                                style={{ textDecoration: 'none' }}
                            >
                                <Button
                                    sx={{
                                        color: 'var(--primary-purple)',
                                        fontWeight: '900',
                                    }}
                                >
                                    Shop
                                </Button>
                            </NavLink>
                        </div>
                    </div>
                    <div className="navbarMiddle">
                        <input
                            className="navbarMiddleSearch"
                            type="text"
                            onKeyDown={handleSearch}
                            placeholder="search user"
                            ref={searchUser}
                        />
                        <Search
                            sx={{
                                color: 'black',
                                position: 'absolute',
                                px: '5px',
                            }}
                            fontSize="large"
                        />
                    </div>
                    <div className="navbarRight">
                        <NotificationsNone
                            sx={{ color: 'black' }}
                            fontSize="large"
                            className="navbarRightItem"
                        />
                        <div className="navbarRightItem avatar">
                            <img
                                src={
                                    user?.avatar
                                        ? user.avatar
                                        : DImages + 'user/defaultAvatar.png'
                                }
                                alt="avatar"
                            />
                            <div className="avatarContext">
                                <div className="avatarContextWrapper">
                                    <ul className="avatarContextList">
                                        <li className="avatarContextItem">
                                            <AccountCircle
                                                sx={{
                                                    color: 'var(--primary-text)',
                                                }}
                                            />
                                            <Link
                                                to={`/profile/${user?.username}`}
                                                className="itemName"
                                            >
                                                Profile
                                            </Link>
                                        </li>
                                        <li
                                            className="avatarContextItem"
                                            onClick={handleLogout}
                                        >
                                            <Logout
                                                sx={{
                                                    color: 'var(--primary-text)',
                                                }}
                                            />
                                            <span className="itemName">
                                                Logout
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
