import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Header from '../../../common/Header';

const Box = styled.div`
width: 1244px;
height: 600px;
background-color: #C3AB99;
position: absolute;
margin-top: 32px;
overflow: hidden;
display: flex;
padding-left: 40px;
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
const PampBox = styled.div`
    width: 400px;   
    height: 600px;  
    background-color: #97887D;
`
const Title = styled.div`
text-align: left;
font-family: "Noto Serif Display";
font-weight: 700;
font-size: 60px;
letter-spacing: 2px;
color: #FFFFFF;
opacity: 1;
margin-top: 30px;
margin-left: 25px;
margin-bottom: 70px;
`
const SubTitle1 = styled.div`
text-align: left;
font-family: "NanumMyeongjo Regular";
font-size: 20px;
letter-spacing: -0.24px;
color: #FFFFFF;
opacity: 1;
margin-left: 25px;
`
const SubTitle2 = styled.div`
text-align: left;
font-family: "NanumMyeongjo Regular";
font-size: 20px;
letter-spacing: -0.24px;
color: #FFFFFF;
opacity: 1;
margin-left: 25px;
`
const DateBox = styled.div`
margin-bottom: 30px;
width:300px;
height:40px;
margin-top: 280px;
margin-left: 25px;
`
const Date = styled.span`
text-align: left;
font-size: 39px;
font-family: "Noto Serif Display";
letter-spacing: 1.28px;
color: #FFFFFF;
opacity: 1;
`
const EngTitle = styled.div`
position: absolute;
transform: matrix(0, 1, -1, 0, 0, 0);
letter-spacing: 0.8px;
color: #E1DCD1;
opacity: 1;
left: 300px;
top: 150px;
font-size: 20px;
font-family: "Noto Serif Display";
font-weight: 900;
`
const ContentBox = styled.div`
    width: 600px;
    height: 600px;
    padding-left: 70px;
    padding-top: 75px;
    padding-right: 160px;
`
const ContentTitle = styled.div`
text-align: left;
font: normal normal normal 28px/41px Noto Sans CJK KR;
letter-spacing: -0.34px;
color: #FFFFFF;
opacity: 1;
margin-bottom: 66px;
`
const Content1 = styled.div`
text-align: left;
font: normal normal normal 20px/29px Noto Sans CJK KR;
letter-spacing: -0.24px;
color: #FFFFFF;
opacity: 1;
`
const Content2 = styled.div`
text-align: left;
font: normal normal normal 16px/24px Noto Sans CJK KR;
letter-spacing: -0.19px;
color: #FFFFFF;
opacity: 1;
margin-bottom: 150px;
`
const DateTitle = styled.div`
font-family: Noto Sans Thin;
font-size: 16px;
letter-spacing: -0.19px;
color: #E1DCD1;
opacity: 1;
text-align: left;
font-weight: 600;
`
const Dates = styled.div`
margin-top: 13px;
text-align: left;
font: normal normal normal 20px/29px Noto Sans CJK KR;
letter-spacing: -0.24px;
color: #FFFFFF;
opacity: 1;
`

const EntranceDiv = styled.div`
vertical-align: bottom;
margin-top: 30px;
margin-right: 50px;
`
const Entrance = styled.button`
background-color: transparent;
width: 181px;
border: 1px solid #FFFFFF;
border-radius: 100px;
opacity: 1;
/* UI Properties */
text-align: center;
font: normal normal normal 18px/21px NanumMyeongjo;
letter-spacing: 0px;
color: #FFFFFF;
opacity: 1;
padding-top: 15px;
padding-bottom: 15px;
float: right;
cursor: pointer;
`
const Contents = styled.div`
margin-top: 131px;
`

const exhibition = {
    id: 1,
    title: 'YOSIGO',
    subtitle1: '요시고 사진전',
    subtitle2: '따뜻한 휴일의 기록',
    content1: '"따뜻한 빛과 피사체가 균형을 이루는 순간"',
    content2: '여행 감성을 자극하는 따뜻한 휴일의 기록',
    startDate: '06.23',
    endDate: '12.25',
}

function Open() {
    
    return (
        <>
        <Header />
        <Contents>
        <Box>
            <PampBox>
                <Title>
                    {exhibition.title}
                </Title>
                <EngTitle>
                Photograph by YOSIGO
                </EngTitle>
                <SubTitle1>
                    {exhibition.subtitle1}
                </SubTitle1>
                <SubTitle2>
                    {exhibition.subtitle2}
                </SubTitle2>
                <DateBox>
                    <Date>{exhibition.startDate}</Date>
                    <Date>{exhibition.endDate}</Date>
                </DateBox>
            </PampBox>
            <ContentBox>
                <ContentTitle>
                    {exhibition.subtitle1}:{exhibition.subtitle2}
                </ContentTitle>
                <Content1>
                    {exhibition.content1}
                </Content1>
                <Content2>
                    {exhibition.content2}
                </Content2>
                <DateTitle>
                    전시기간
                </DateTitle>
                <Dates>
                    {exhibition.startDate} ~ {exhibition.endDate}
                </Dates>
            </ContentBox>
            <EntranceDiv>
                <Link to='/entrance'>
                    <Entrance>Entrance</Entrance>
                </Link>
            </EntranceDiv>
        </Box>
        </Contents>
        </>
    )
}

export default Open
