import React from 'react'
import styled from 'styled-components'
import BackIcon from '../../../../styles/icons/back.png'
import { Link } from 'react-router-dom'
import Comments from './Comments'

const PageBox = styled.div`
background-color: #E1DCD1;
width: 100vw;
height: 100vh;
top: 0;
right: 0;
bottom: 0;
left: 0;
position: fixed;
align-items: center;
text-align: center;
`

const Top = styled.div`
width: 1279px;
display: flex;
margin: 0 auto;
margin-top: 119px;
`

const BackButton = styled.img`
width: 22px;
height: 22px;
margin-left: 54px;
margin-right: 340px;
`

const Title = styled.div`
font: normal normal 800 32px/36px NanumSquare;
letter-spacing: 1.28px;
color: #191919;
opacity: 1;
margin-top: -9px;
`

function Comment() {
    return (
        <PageBox>
            <Top>
                <Link to='/entrance'>
                    <BackButton src={BackIcon} />
                </Link>
                <Title>요시고 사진전 : 따뜻한 휴일의 기록</Title>
            </Top>
            <Comments />
        </PageBox>
    )
}

export default Comment