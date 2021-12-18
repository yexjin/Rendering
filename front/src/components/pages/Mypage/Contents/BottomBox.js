import React, { useState } from 'react'
import styled from 'styled-components'
import {Nav, NavItem, NavLink} from 'reactstrap'
import Introduce from './Introduce/index'
import Arts from './Arts/index'
import Pamphlet from './Pamphlet/index'
import { useNavigate, useParams } from 'react-router-dom';


const Box = styled.div`
padding-left: 83px;
width: 100%;
background-color: #FFFFFF;
margin-right: 83px;
`

const Navigation = styled.div`
width: 455px;
display: flex;
background-color: white;
padding-top: 33px;
`

const Clicked = styled.div`
text-align: center;
font-size: 18px/27px;
font-family: Noto Sans Bold;
letter-spacing: 0px;
color: #191919;
opacity: 1;
cursor: pointer;
`

const NoClick = styled.div`
text-align: left;
font-size: 18px/27px;
font-family: Noto Sans Thin;
letter-spacing: 0px;
color: #191919;
font-weight: 700;
opacity: 1;
cursor: pointer;
`

const NavHr = styled.hr`
width: 455px;
margin-top: -3px;
`

const ClickHr = styled.div`
position: absolute;
width: 67px;
background-color: #000000;
height: 1px;
top: 352px;
`


function BottomBox() {


    const [toggle, setToggle] = useState({
        '1': true,
        '2': false,
        '3': false
    })

    const onClick1 = () => {
        setToggle({
            '1': true,
            '2': false,
            '3': false
        })
        window.location.reload(false);
    }

    const onClick2 = () => {
        setToggle({
            '1': false,
            '2': true,
            '3': false
        })
    }

    const onClick3 = () => {
        setToggle({
            '1': false,
            '2': false,
            '3': true
        })
    }

    return (
        <Box>
            <Navigation>
                <Nav taps>
                    <NavItem>
                        <NavLink active onClick={onClick1}>
                            {(toggle['1']==true)?(<><Clicked>전시 소개</Clicked><ClickHr /></>):(<NoClick>전시 소개</NoClick>)}
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={onClick2}>
                            {(toggle['2']==true)?(<><Clicked>전시 작품</Clicked><ClickHr /></>):(<NoClick>전시 작품</NoClick>)}
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={onClick3}>
                            {(toggle['3']==true)?(<><Clicked>팜플랫</Clicked><ClickHr /></>):(<NoClick>팜플랫</NoClick>)}
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navigation>
            <NavHr />

            {(toggle['1']==true) ? (
                <Introduce />
            ): (<></>)}
            
            {(toggle['2']==true) ? (
                <Arts />
            ): (<></>)}
             {(toggle['3']==true) ? (
                <Pamphlet />
            ): (<></>)}
        </Box>
    )
}

export default BottomBox
