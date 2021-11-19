import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LogoImg from '../../styles/icons/Logo.png'

const Head = styled.div`
    display: flex;
    justify-content: space-between;
`

const Logo = styled.img`
top: 80px;
left: 330px;
width: 40px;
height: 40px;
border-radius: 15px;
opacity: 1;
margin-right: 30px;
margin-top: 2px;
`

const Menus = styled.div`
display: flex;
`

const Menu = styled.div`
text-decoration-line: none;
top: 89px;
left: 400px;
/* UI Properties */
text-align: left;
font: normal normal medium 20px/24px Roboto;
letter-spacing: 0px;
color: #363636;
opacity: 1;
margin-right: 30px;
padding-top: 8px;
`

const Search = styled.div`
top: 86px;
left: 1469px;
width: 30px;
height: 30px;

background: transparent url('img/search.png') 0% 0% no-repeat padding-box;
opacity: 1;
`

const Mypage = styled.div`
margin-left: 30px;
top: 86px;
left: 1544px;
width: 30px;
height: 30px;
/* UI Properties */
background: transparent url('img/user.png') 0% 0% no-repeat padding-box;
opacity: 1;
`

const Buttons = styled.div`
float: right;
display: flex;
`

function Header() {
    return (
        <Head>
            <Menus>
                <Link to='/' style={{textDecoration: 'none'}}>
                    <Logo src={LogoImg}>
                    </Logo>
                </Link>
                <Link to='/' style={{textDecoration: 'none'}}>
                    <Menu>HOME</Menu>
                </Link>
                <Link to='/exhibition' style={{textDecoration: 'none'}}>
                    <Menu>EXHIBITION</Menu>
                </Link>
                <Link to='/hosting' style={{textDecoration: 'none'}}>
                    <Menu>HOSTING</Menu>
                </Link>
                <Menu>CONTACT</Menu>
            </Menus>
            <Buttons>
                <Search>검색</Search>
                <Link to='/login' style={{textDecoration: 'none', color: 'black'}}>
                    <Mypage>마이페이지</Mypage>
                </Link>
            </Buttons>
        </Head>
    )
}

export default Header
