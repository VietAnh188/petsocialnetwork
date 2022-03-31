import React from 'react'
import './qnaPost.scss'
import logo from '../../assets/img/logo.png'
import { DoubleArrow } from '@mui/icons-material'

const QNAPost = () => {
    return (
        <div className="qnaPost">
            <div className="qnaPostWrapper">
                <div className="qnaPostLeft">
                    <div className="qnaPostLeftInfo">
                        <div className="qnaPostLeftInfoAvatar">
                            <img src={logo} alt="" />
                        </div>
                        <div className="qnaPostLeftInfoDetail">
                            <span className="username">Vietanh</span>
                            <span className="sub">Special</span>
                        </div>
                    </div>
                    <div className="qnaPostLeftDescription">
                        <span className="description">
                            Anyone, can you help me? I'm lost my dog in ThanhCo
                            at 4h30. If you see he, call me: 012345679
                        </span>
                    </div>
                </div>
                <div className="qnaPostRight">
                    <div className="qnaPostRightTop">
                        <span className="time">5m ago</span>
                    </div>
                    <div className="qnaPostRightBottom">
                        <DoubleArrow
                            fontSize="large"
                            className="doubleArrowIcon"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QNAPost
