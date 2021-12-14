import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
width: 280px;
height: 340px;
background-color: white;
margin-right: 53px;
margin-bottom: 60px;
`

const WhoBox = styled.div`
background-color: #A5988F;
width: 280px;
height: 70px;
z-index: 9;
margin-top: 89px;
display: flex;
padding-left: 11px;
padding-top: 15px;
`

const WhoImg = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background: #FFFFFF 0% 0% no-repeat padding-box;
opacity: 1;
`

const Nickname = styled.div`
width: 62px;
height: 24px;
/* UI Properties */
text-align: left;
font: normal normal normal 16px/24px Noto Sans CJK KR;
letter-spacing: -0.19px;
color: #FFFFFF;
opacity: 1;
margin-left: 8px;
margin-top: 7px;
`

const Input = styled.textarea`
/* UI Properties */
text-align: center;
font-family: Noto Sans Bold;
font-size: 16px/24px;
letter-spacing: -0.19px;
color: #767676;
opacity: 1;
background-color: white;
border-style: none;
margin-top: 123px;
`

function InputComment() {
    return (
        <Box>
            <Input 
                placeholder="댓글을 달아보세요!"
            />
            <WhoBox>
                <WhoImg/>
                <Nickname>uijin0***</Nickname>
            </WhoBox>
        </Box>
    )
}

export default InputComment
