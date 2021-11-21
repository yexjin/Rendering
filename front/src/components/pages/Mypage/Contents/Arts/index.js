import React, { useState } from 'react'
import styled from 'styled-components'
import ExImg1 from '../../../../../styles/images/yosigo.jpg'
import ExImg2 from '../../../../../styles/images/yosigo2.jpg'
import ExImg3 from '../../../../../styles/images/e1.jpg'
import ExImg4 from '../../../../../styles/images/e2.jpg'
import ExImg5 from '../../../../../styles/images/backgroundImg.png'


const Box = styled.div`
display: flex;
margin-top: 65px;
`
const FileBox = styled.div`
display: flex;
`
const FileUpload = styled.div`

`
const Buttons = styled.div`
width: 362px;
height: 48px;
float: right;
margin-right: 24px;
`
const ImgBox = styled.div`
overflow-y: scroll;
::-webkit-scrollbar { 
    display: none;
}
height: 566px;
`
const InputBox =  styled.div`
height: 301px;
width: 285px;
margin-right: 24px;
`
const InputLabel = styled.div`
text-align: left;
font: normal normal normal 20px/29px Noto Sans CJK KR;
letter-spacing: -0.24px;
color: #191919;
opacity: 1;
`
const InputImg = styled.div`
margin-top: 21px;
width: 285px;
height: 225px;
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 1px solid #707070;
opacity: 1;
cursor: pointer;
text-align: center;
padding-top: 99px;
`
const Submit = styled.div`
margin-top: 40px;
background-color: #ffffff;
font: normal normal normal 18px/27px Noto Sans CJK KR;
letter-spacing: 0px;
color: #191919;
opacity: 1;
width: 181px;
height: 48px;
border: 1px solid #999999;
opacity: 1;
border-radius: 5px;
text-align: center;
padding-top: 10px;
cursor: pointer;
float: right;
`

const ImgUpload = styled.div`
width: 200px;
height: 200px;
/* UI Properties */
background: #E4E4E4 0% 0% no-repeat padding-box;
box-shadow: 0px 3px 6px #00000029;
border-radius: 5px;
opacity: 1;
text-align: center;
font: normal normal normal 80px/119px Noto Sans CJK KR;
letter-spacing: -0.96px;
color: #FFFFFF;
opacity: 1;
padding-top: 45px;
margin-bottom: 33px;
`
const Imgs = styled.div`
background-color: white;
width: 200px;
height: 200px;
background: #E4E4E4 0% 0% no-repeat padding-box;
box-shadow: 0px 3px 6px #00000029;
border-radius: 5px;
opacity: 1;
img{
    width: 200px;
    height: 200px; 
}
margin-bottom: 33px;
`

function Arts() {

    const [image, setImage] = useState(null);

    const imageChange = (e) => {
        setImage(e.target.files[0]);
      };

    return (
        <Box>
            <FileUpload>
            <FileBox>
            <InputBox>
                <InputLabel>썸네일</InputLabel>
                <InputImg type="file" onChange={imageChange}>파일 찾기</InputImg>
            </InputBox>
            <InputBox>
                <InputLabel>PDF 또는 이미지 파일</InputLabel>
                <InputImg type="file" onChange={imageChange}>파일 찾기</InputImg>
            </InputBox>
            </FileBox>
            <Buttons>
                <Submit>저장</Submit>
            </Buttons>
            </FileUpload>
            <ImgBox>
                <ImgUpload>+</ImgUpload>
                <Imgs><img src={ExImg1} /></Imgs>
                <Imgs><img src={ExImg2} /></Imgs>
                <Imgs><img src={ExImg3} /></Imgs>
                <Imgs><img src={ExImg4} /></Imgs>
                <Imgs><img src={ExImg5} /></Imgs>
            </ImgBox>
        </Box>
    )
}

export default Arts
