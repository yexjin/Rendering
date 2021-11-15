import React from 'react'
import styled from 'styled-components';
import ExamImg1 from '../../../../styles/images/yosigo.jpg';
import Architectures from './Architectures';
import { Link } from 'react-router-dom';

const Exhibits = styled.div`
animation: fadein 1s;
@keyframes fadein {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

`

const AboutText = styled.div`
    position: absolute;
    flex: 1;
    text-align: left;
    font: normal normal normal 24px/28px NanumMyeongjo;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    margin-top: 41px;
    margin-left: 40px;
    
    cursor: pointer;
    `

const TopText = styled.div`
    margin: 0 auto;
    text-align: center;
    position: absolute;
    flex: 1;
    
    font: normal normal 900 80px/96px Roboto;
    letter-spacing: 3.2px;
    color: #FFFFFF;
    opacity: 1;
    `

const TopImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1280px;
    height: 940px;
    img{
        width: 100%;
        height: 100%;
        
        ${TopText}{
            z-index: 3;
        }
    }
    `

// const BackgroundText = styled.div`
//     margin: 0 auto;
//     text-align: center;
//     position: absolute;

//     font: normal normal normal 60px/69px NanumMyeongjo;
//     letter-spacing: 1.8px;
//     color: #FFFFFF;
//     opacity: 1;
// `

const Arts = styled.div`
margin-top: 50px;
`


function Entrance() {

    return (
        <Exhibits>
        <Link to='/About'>
        <AboutText>About</AboutText>
        </Link>

        <TopImg>
            <img src={ExamImg1}/>
            <TopText>YOSIGO</TopText>
        </TopImg>

        <Arts>
            <Architectures />
        </Arts>

        </Exhibits>
    )
}

export default Entrance
