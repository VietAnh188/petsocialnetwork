import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Newfeed from '../../components/newfeed/Newfeed';
import './home.scss';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="home">
                <div className="bodyWrapper">
                    <span style={{ flex: '1' }}></span>
                    <span style={{ flex: '1.5' }}>
                        <Newfeed home />
                    </span>
                    <span style={{ flex: '1' }}></span>
                </div>
            </div>
        </>
    );
};

export default Home;
