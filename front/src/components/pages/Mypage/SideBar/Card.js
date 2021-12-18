import React from 'react'
import styled from 'styled-components'
import ExImg from '../../../../styles/images/yosigo.jpg'
import {DateChange} from '../../../../utils/dateChange';

const Box = styled.div`
width: 302px;
height: 110px;
background: #F9F9F9 0% 0% no-repeat padding-box;
border-radius: 5px;
opacity: 1;
margin-left: 24px;
margin-bottom: 17px;
display: flex;
justify-content: space-between;
`

const SubBox = styled.div`
`

const Title = styled.div`
text-align: left;
font-size: 15px;
font-family: Noto Sans Bold;
letter-spacing: 0.56px;
color: #191919;
opacity: 1;
padding-top: 18px;
margin-left: 17px;
`

const Dates = styled.div`
text-align: left;
font-size: 13px;
font-family: Noto Sans Bold;
font-weight: 400;
letter-spacing: 0.48px;
color: #191919;
opacity: 1;
margin-top: 8px;
margin-left: 17px;
`

const Img = styled.img`
width: 60px;
height: 74.26px;
margin-top: 17.87px;
margin-right: 16px;
`

function Card({ project }) {
    return (
        <>
            <Box>
                <SubBox>
                    <Title>{project.exhibition_name}</Title>
                    <Dates>{DateChange(project.start_date)} ~ {DateChange(project.end_date)}</Dates>
                </SubBox>
                {console.log(project.main_image)}
                <SubBox src={project.main_image}>
                    { project.main_image !== "null"? (
                    <img
                        src={"/img/" + project.main_image}
                        alt="사진이미지"
                        /> ) : (<img
                        src={"/img/1638893349813_고앵.jpeg"}
                        alt="이미지"
                    />)}
                </SubBox>
            </Box>    
        </>
    )
}

export default Card