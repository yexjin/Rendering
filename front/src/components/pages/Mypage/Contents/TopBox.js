import React from 'react'
import styled from 'styled-components'
import HeartImg from '../../../../styles/icons/love.png'
import CommentImg from '../../../../styles/icons/comment.png'

const Box = styled.div`
width: 100%;
margin-bottom: 34px;
margin-left:83px;
margin-right: 83px;
`

const Title = styled.div`
text-align: left;
font: normal normal normal 28px/41px Noto Sans CJK KR;
font-family: Noto Sans Thin;
font-weight: 700;
font-size: 28px/41px;
color: #191919;
opacity: 1;
margin-top: 113px;
`

const Comments = styled.div`
display: flex;
width: 174px;
margin-top: 65px;
`

const Heart = styled.div`
display: flex;
text-align: left;
font: normal normal normal 18px/30px Noto Sans CJK KR;
font-family: Noto Sans Thin;
font-size: 18px/30px;
font-weight: 700;
letter-spacing: -0.22px;
color: #191919;
opacity: 1;

img{
    width: 24px;
    height: 24px;
    margin-right: 14px;
    margin-top: 4px;
}

`
const Comment = styled.div`
margin-left: 40px;
display: flex;
text-align: left;
font: normal normal normal 18px/30px Noto Sans CJK KR;
font-family: Noto Sans Thin;
font-size: 18px/30px;
font-weight: 700;
letter-spacing: -0.22px;
color: #191919;
opacity: 1;

img{
    width: 24px;
    height: 24px;
    margin-right: 14px;
    margin-top: 4px;
}
`

function TopBox() {
    return (
        <Box>
             <Title>요시고 사진전: 따뜻한 휴일의 기록</Title>
             <Comments>
                <Heart><img src={HeartImg}/>275</Heart>
                <Comment><img src={CommentImg} />21</Comment>
             </Comments>
        </Box>
    )
}

export default TopBox
