import React from 'react'
import styled from 'styled-components'
import LogoImg from '../../../../styles/icons/Logo2.png'
import Inform from './Inform'
import Progress from './Progress'
import { Link } from 'react-router-dom';

const Bar = styled.div`
background-color: #A5988F;
width: 350px;

`

const Logo = styled.img`
width: 50px;
margin-top: 80px;
margin-right: 40px;
`

const Hr = styled.hr`
width: 100%;
height: 1px;
background: #F9F9F9 0% 0% no-repeat padding-box;
opacity: 1;
`


function SideBar() {
    return (
        <Bar>
            <Link to='/user/main'>
                <Logo src={LogoImg} width="50px"/>
            </Link>
            <Inform />
            <Hr />
            <Progress />
        </Bar>
    )
}

export default SideBar
