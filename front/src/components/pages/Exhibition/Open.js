import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Box = styled.div`
width: 1280px;
height: 600px;
background-color: #D9CCC1;
position: absolute;
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

function Open({pamp, onToggle}) {
    return (
        <Box>
            <Xbutton onClick={()=>onToggle(pamp.id)}>X</Xbutton>
            {pamp.name}<br />
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
    )
}

export default Open
