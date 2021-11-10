import React, { useState } from 'react'
import styled from 'styled-components';
import ExamImg1 from '../../../styles/images/yosigo.jpg';
import ExamImg2 from '../../../styles/images/yosigo2.jpg';
import About from './About';


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

const BackgroundText = styled.div`
    margin: 0 auto;
    text-align: center;
    position: absolute;
    flex: 1;

    font: normal normal normal 60px/69px NanumMyeongjo;
    letter-spacing: 1.8px;
    color: #FFFFFF;
    opacity: 1;
`

const BackgroundImg = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 1280px;
height: 1080px;
img{
    height: 340px;
    width: 780px;

    opacity: 0.7;

        
    ${BackgroundText}{
        z-index: 3;
    }
}
`


function Works() {

    const [Modal, setModalOpen] = useState(false);

    const ModalOpen = () => {
        setModalOpen(true);
      };
    
    const ModalClose = () => {
        setModalOpen(false);
    };

    return (
        <>
        <AboutText onClick={ModalOpen}>About</AboutText>

        <About
            open={Modal}
            close = {ModalClose}
        />

        <TopImg>
            <img src={ExamImg1}/>
            <TopText>YOSIGO</TopText>
        </TopImg>

        <BackgroundImg>
            <img src={ExamImg2}/>
            <BackgroundText>Architecture</BackgroundText>
        </BackgroundImg>
        </>
    )
}

export default Works
