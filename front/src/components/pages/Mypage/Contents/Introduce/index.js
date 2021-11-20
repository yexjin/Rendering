import React from 'react'
import styled from 'styled-components'

const Inputs = styled.div`
width: 696px;
margin-top: 54px;
height: 100%;
`

const LabelwithInput = styled.div`
margin-bottom: 20px;
display: flex;
margin-left: 14px;
`
const Label = styled.label`
padding-top: 10px;
font-family: Noto Sans Thin;
font-size: 20px/29px;
text-align: left;
color: #767676;
font-weight: 900;
height: 60px;
width: 95px;
vertical-align: center;
`

const Input = styled.input`
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 1px solid #707070;
border-radius: 10px;
opacity: 1;
width: 600px;
height: 50px;
`
const InputBig = styled.input`
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 1px solid #707070;
border-radius: 10px;
opacity: 1;
width: 600px;
height: 242px;
`

const FloatBox = styled.div`
width: 700px;
`

const Comment = styled.div`
text-align: right;
font-size: 16px/24px;
font-family: Noto Sans Thin;
font-weight: 700;
letter-spacing: 0px;
color: #767676;
opacity: 1;
`

const Preview = styled.div`
background-color: #ffffff;
margin-top: 30px;
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
margin-left: 517px;
`

const Submit = styled.div`
margin-top: 100px;
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
margin-bottom: 130px;
`


function Introduce() {
    return (
       <>
       <Inputs>
       <LabelwithInput>
            <Label>전시명</Label> <Input></Input>
        </LabelwithInput>
        <LabelwithInput>
            <Label>주관</Label> <InputBig></InputBig>
        </LabelwithInput>
        <LabelwithInput>
            <Label>전시 설명</Label> <Input></Input>
        </LabelwithInput>
        <LabelwithInput>
            <Label>시작 날짜</Label> <Input></Input>
        </LabelwithInput>
        <LabelwithInput>
            <Label>종료 날짜</Label> <InputBig></InputBig>
        </LabelwithInput>
        <LabelwithInput>
            <Label>대표 사진</Label> <InputBig></InputBig>
        </LabelwithInput>
        <LabelwithInput>
            <Label>추가 사진</Label> <InputBig></InputBig>
        </LabelwithInput>
       <FloatBox>
            <Comment>추가 사진은 온리인 전시 페이지 〉'About' 페이지에 들어갈 전시 소개에 추가 됩니다.</Comment>
       </FloatBox>
            <Preview>소개 페이지 미리보기</Preview>
            <Submit>저장</Submit>
       </Inputs>
       </>
    )
}

export default Introduce
