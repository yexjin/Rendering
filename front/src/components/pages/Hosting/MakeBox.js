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

function MakeBox() {
    return (
        <>
        <Box>
            <TextInputs />
            <NextButton src={Next}/>
            <SelectColor />
        </Box>
        </>
    )
}

export default MakeBox
