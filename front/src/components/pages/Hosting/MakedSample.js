import React from 'react'
import styled from 'styled-components'
import {DateChange} from '../../../utils/dateChange'


const Pamp = styled.div`
background-color: ${(props) => props.color};
width: 400px;
height: 600px;
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
function MakedSample({ color, info }) {
    return (
        <>
        <Pamp color={color}>
            <Title>
               {info.exhibition_name}
            </Title>
            <SubTitle1>
                {info.description}             
            </SubTitle1>
            <DateBox>
                <Date>{DateChange(info.start_date)} - </Date> 
                <Date>{DateChange(info.end_date)}</Date>
            </DateBox>
        </Pamp>  

        </>
    )
}

export default MakedSample
