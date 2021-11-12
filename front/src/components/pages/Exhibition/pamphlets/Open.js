import React, { useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Header from '../../../common/Header';

const Box = styled.div`
width: 1280px;
height: 600px;
background-color: #D9CCC1;
position: absolute;
margin-top: 32px;
`
const Xbutton = styled.button`
width: 20px;
height: 20px;
float: right;
cursor: pointer;
`
const EntranceDiv = styled.div`
vertical-align: bottom;
margin-top: 30px;
margin-right: 42px;
`
const Entrance = styled.button`
background-color: transparent;
width: 181px;
border: 1px solid #FFFFFF;
border-radius: 100px;
opacity: 1;
/* UI Properties */
text-align: center;
font: normal normal normal 18px/21px NanumMyeongjo;
letter-spacing: 0px;
color: #FFFFFF;
opacity: 1;
padding-top: 15px;
padding-bottom: 15px;
float: right;
cursor: pointer;
`
const Contents = styled.div`
margin-top: 131px;
`
const Exams = styled.div`
display: flex;
width: 80px;
margin: 0 auto;
`
const Slide = styled.div`
width: 20px;
height: 20px;
background: #74747480 0% 0% no-repeat padding-box;
border-radius: 15px;
opacity: 1;
margin-right: 10px;
`
const Tile = styled.div`
width: 20px;
height: 20px;
background: #74747480 0% 0% no-repeat padding-box;
border-radius: 15px;
opacity: 1;
margin-right: 30px;
`

function Open({exhibition}) {

    const { title } = exhibition; 
    
    return (
        <>
        <Header />
        <Contents>
        <Exams>
        <Link to='/exhibition'>
            <Slide/>
        </Link>
        <Link to='/exhibition'>
            <Tile />
        </Link>
        </Exams>
        <Box>
            <Link to='/exhibition'>
                <Xbutton>X</Xbutton>
            </Link>
            {title}<br />
            내용내용내용내용내용내용내용내용내용내용내용내용내용내용<br />
            내용내용내용내용내용내용내용내용내용내용내용내용내용내용<br />
            내용내용내용내용내용내용내용내용내용내용내용내용내용내용<br />
            내용내용내용내용내용내용내용내용내용내용내용내용내용내용<br />
            내용내용내용내용내용내용내용내용내용내용내용내용내용내용<br />
            <EntranceDiv>
                <Link to='/works'>
                    <Entrance>Entrance</Entrance>
                </Link>
            </EntranceDiv>
        </Box>
        </Contents>
        </>
    )
}

export default Open
