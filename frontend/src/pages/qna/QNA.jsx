import { Container } from '@mui/material'
import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import QNAPost from '../../components/qnaPost/QNAPost'
import './qna.scss'

const QNA = () => {
    return (
        <div className="qna">
            <Navbar />
            <div className="bodyWrapper">
                <Container maxWidth="xl" className="bodyWrapperSub">
                    <div className="qnaLeft">
                        <QNAPost />
                        <QNAPost />
                        <QNAPost />
                    </div>
                    <div className="qnaRight">hello</div>
                </Container>
            </div>
        </div>
    )
}

export default QNA
