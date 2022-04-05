import React from 'react';
import './inforBox.scss';
import {
    Email,
    LocationOn,
    CellTower,
    ConnectWithoutContact,
} from '@mui/icons-material';

const InforBox = ({ user }) => {
    console.log('inforBox');
    return (
        <div className="inforBox">
            <div className="inforBoxWrapper">
                <div className="inforBoxHeader">
                    <span>Intro</span>
                </div>
                <div className="inforBoxBody">
                    {user?.email && (
                        <div className="inforBoxBodyItem">
                            <Email />
                            <span>{user.email}</span>
                        </div>
                    )}
                    {user?.address && (
                        <div className="inforBoxBodyItem">
                            <LocationOn />
                            <span>{user.address}</span>
                        </div>
                    )}
                    {user?.followings && (
                        <div className="inforBoxBodyItem">
                            <CellTower />
                            <span>Followings: {user.followings.length}</span>
                        </div>
                    )}
                    {user?.followers && (
                        <div className="inforBoxBodyItem">
                            <ConnectWithoutContact />
                            <span>Followergs: {user.followers.length}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default InforBox;
