import React from 'react'
import styled from 'styled-components';
import TextInputs from './TextInputs';
import SelectColor from './SelectColor';
import Next from '../../../styles/icons/next.png';

const Box = styled.div`
display: flex;
width: 1280px;
height: 600px;
margin:0 auto;
`

const NextButton = styled.img`
margin-left: 59px;
margin-right: 59px;
margin-top: 275px;
width: 45px;
height: 45px;
cursor: pointer;
`

const Submit = styled.div`
margin-top: 70px;
background-color: #ffffff;
font: normal normal normal 18px/27px Noto Sans CJK KR;
letter-spacing: 0px;
color: #191919;
opacity: 1;
width: 181px;
height: 48px;
border: 1px solid #999999;
opacity: 1;
border-radius: 5px;
text-align: center;
padding-top: 10px;
cursor: pointer;
float: right;
margin-right: 120px;
`

function MakeBox() {
    return (
        <>
        <Box>
            <TextInputs />
            <NextButton src={Next}/>
            <SelectColor />
        </Box>
        <Submit>확인</Submit>
        </>
    )
}

export default MakeBox
