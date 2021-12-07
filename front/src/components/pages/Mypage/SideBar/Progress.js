import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import Card from './Card'
import { Link } from 'react-router-dom'

const Title = styled.div`
text-align: left;
font: normal normal normal 24px/29px Roboto;
letter-spacing: 0.96px;
color: #F9F9F9;
opacity: 1;
margin-left: 24px;
margin-top: 42px;
`

const NewButton = styled.button`
margin-top: 30px;
font: normal normal normal 18px/27px Noto Sans CJK KR;
letter-spacing: 0px;
color: #FFFFFF;
opacity: 1;
width: 302px;
height: 48px;
margin-left: 24px;
border: 1px solid #FFFFFF;
opacity: 1;
border-radius: 5px;
background-color: #A5988F;
margin-bottom: 32px;
`

function Progress() {

    return (
        <>
        <Title>In progress</Title>
        <Link to="/hosting">
        <NewButton>New Project</NewButton>
        </Link>
        {/* <Card projects={data} /> */}
        </>
    )
}

export default Progress
