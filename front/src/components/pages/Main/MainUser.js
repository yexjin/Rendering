import React from 'react'
import HeaderLogin from '../../common/HeaderLogin';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HoverImg from '../../../styles/icons/back2.png';
import {getDataFromStorage} from '../../../utils/storage';

const Contents = styled.div`
display: flex;
margin-top: 185px;
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

const BigText = styled.div`
top: 305px;
left: 350px;

/* UI Properties */
text-align: left;
font-family: "Noto Serif Display";
letter-spacing: 0px;
color: #191919;
opacity: 1;
font-size: 80px;
`
const SmallText = styled.div`
position: absolute;
z-index:5;
margin-top: 32px;
width: 792px;
/* UI Properties */
text-align: left;
font: normal normal normal 18px/30px Roboto;
letter-spacing: 0px;
color: #191919;
opacity: 1;
`

const Buttons = styled.div`
    margin-top: 218px;
`

const Img = styled.div`
position: absolute;
top: 315px;
left: 1000px;
width: 450px;
height: 450px;
/* UI Properties */
background: #E1DCD1 0% 0% no-repeat padding-box;
opacity: 1;
border-radius: 50%;
`

const Button = styled.button`
    cursor: pointer;
    font-family: Noto Sans Bold;
    font-size: 24px;
    text-align: left;
    letter-spacing: 0px;
    color: #363636;
    opacity: 1;
    border: 0;
    outline: 0;
    background-color: transparent;
    margin-bottom: 15px;
    img{
        display: none;
    }
    :hover{
        img{
            display: inline-block;
            margin-left: 20.5px;
            margin-bottom: 8px;
        }
    }
`

function MainUser() {
    
    return (
        <>
        <HeaderLogin />
        <Contents>
            <div>
                <BigText>
                    Express yourself
                </BigText>
                <SmallText>
                렌더링은 코로나19로 인해 제한된 오프라인 활동으로 자신의 작품을 전시하거나 홍보하는데 어려움을 격고 있는 모든 창작자를 위한 온라인 전시회 호스팅 서비스입니다.
                </SmallText>
                <Buttons>
                    <Link to='/exhibition' style={{textDecoration: 'none'}}>
                        <Button >
                            전시 보러가기
                            <img src={HoverImg}/>
                        </Button>
                    </Link>
                    <br />
                    <Link to='/hosting' style={{textDecoration: 'none'}}>
                        <Button>
                            전시 열기
                            <img src={HoverImg}/>
                        </Button>
                    </Link>
                </Buttons>
            </div>
            <Img />
        </Contents>
        </>
    )
}

export default MainUser
