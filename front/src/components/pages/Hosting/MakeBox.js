import React from 'react'
import styled from 'styled-components';
import TextInputs from './TextInputs';
import SelectColor from './SelectColor';
import Back from '../../../styles/icons/next2.png';
import { Link } from 'react-router-dom';


const BackButton = styled.img`
width: 68px;
height: 45px;
cursor: pointer;
float: right;
margin-top: 30px;
`

function MakeBox() {
    return (
        <>
        <Link to="/user/main">
        <BackButton src={Back}/>
        </Link>
            <TextInputs />
        </>
    )
}

export default MakeBox
