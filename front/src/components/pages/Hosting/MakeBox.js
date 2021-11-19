import React from 'react'
import styled from 'styled-components';
import TextInputs from './TextInputs';
import SelectColor from './SelectColor';

const Box = styled.div`
display: flex;
width: 1280px;
height: 600px;
margin:0 auto;
`

const Button = styled.button`
width: 45px;
height: 45px;
margin-left: 59px;
margin-right: 59px;
margin-top: 275px;
`

function MakeBox() {
    return (
        <>
        <Box>
            <TextInputs />
            <Button />
            <SelectColor />
        </Box>
        </>
    )
}

export default MakeBox
