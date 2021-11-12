import React from 'react'
import Header from '../../common/Header';
import styled from 'styled-components';

const Contents = styled.div`
display: flex;
margin-top: 185px;
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
    &:hover {
        
    }
`

function Main() {
    return (
        <>
        <Header />
        <Contents>
            <div>
                <BigText>
                    Welcome Render
                </BigText>
                <SmallText>
                렌더링에 가입해주셔서 감사합니다:)
                </SmallText>
                <Buttons>
                    <Button>
                        전시 보러가기
                    </Button>
                    <Button>
                        전시 열기
                    </Button>
                </Buttons>
            </div>
            <Img />
        </Contents>
        </>
    )
}

export default Main
