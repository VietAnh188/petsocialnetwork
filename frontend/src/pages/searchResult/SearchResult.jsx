import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './searchResult.scss';
import { Container } from '@mui/material';
import SearchItem from '../../components/searchItem/SearchItem';
import Navbar from '../../components/navbar/Navbar';
import { useQuery } from '../../hooks';

const SearchResult = () => {
    const username = useQuery().get('username');
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get(
                    `/users/search/?username=${username}`
                );
                setUserList(res.data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [username]);

    return (
        <>
            <Navbar />
            <Container maxWidth="xl">
                <div className="searchResult">
                    <div className="searchResultWrapper">
                        <span style={{ flex: 1 }}></span>
                        <span style={{ flex: 1.5 }}>
                            {userList.map(user => (
                                <SearchItem key={user._id} user={user} />
                            ))}
                        </span>
                        <span style={{ flex: 1 }}></span>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default SearchResult;
