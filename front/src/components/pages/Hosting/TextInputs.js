import React, { useState } from 'react'
import styled from 'styled-components'

const Inputs = styled.div`
width: 560px;
height: 625px;
overflow-y: scroll;
::-webkit-scrollbar { 
    display: none;
}
/* overflow-y: auto;
overflow-x: hidden; */
`
const LabelwithInput = styled.div`
margin-bottom: 20px;
display: flex;

`
const Label = styled.label`
padding-top: 10px;
font-family: Noto Sans Thin;
font-size: 20px;
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
width: 457px;
height: 50px;
font-size: 20px;
`
const InputBig = styled.textarea`
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 1px solid #707070;
border-radius: 10px;
opacity: 1;
width: 457px;
height: 242px;
font-size: 20px;
padding: 15px 15px 15px 15px;
`

function TextInputs() {
    const [data, setData] = useState({
        title: "",
        management: "",
        explain: "",
        startDate: "",
        endDate: "",
        topImg: "",
      });

    const handleChange = (e) => {
    setData({
        ...data,
        [e.target.name]: e.target.value,
    });
    };

    return (
        <Inputs>
        <LabelwithInput>
            <Label>전시명</Label> <Input></Input>
        </LabelwithInput>
        <LabelwithInput>
            <Label>전시 설명</Label> <InputBig ></InputBig>
        </LabelwithInput>
        <LabelwithInput>
            <Label>시작 날짜</Label> <Input></Input>
        </LabelwithInput>
        <LabelwithInput>
            <Label>종료 날짜</Label> <Input></Input>
        </LabelwithInput>
        <LabelwithInput>
            <Label>대표사진</Label> <InputBig></InputBig>
        </LabelwithInput>
        </Inputs>
    )
}

export default TextInputs
