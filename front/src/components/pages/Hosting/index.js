import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MakeBox from './MakeBox';

const BackButton = styled.div`
float: right;
width: 68px;
height: 45px;
background-color: white;
margin-bottom: 103px;
`

const Page = styled.div`
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

function Hosting() {
    return (
        <Page>
        <Link to='/'>
            <BackButton></BackButton>
        </Link>
        <MakeBox />
        </Page>
    )
}

export default Hosting
