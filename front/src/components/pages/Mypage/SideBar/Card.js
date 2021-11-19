import React from 'react'
import styled from 'styled-components'
import ExImg from '../../../../styles/images/yosigo.jpg'


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

function Card({ projects }) {
    return (
        <>
        {projects.map(project =>
            <Box key={project.id}>
                <SubBox>
                    <Title>{project.subtitle1}</Title>
                    <Dates>{project.startDate} ~ {project.endDate}</Dates>
                </SubBox>
                <SubBox>
                    <Img src={ExImg} />
                </SubBox>
            </Box>    
        )}
        </>
    )
}

export default Card
