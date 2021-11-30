import React, { useState } from 'react'
import styled from 'styled-components'
import Next from '../../../styles/icons/next.png';
import SelectColor2 from './SelectColor2';
import SelectColor from './SelectColor';

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
const NextButton = styled.img`
margin-left: 59px;
margin-right: 59px;
margin-top: 275px;
width: 45px;
height: 45px;
cursor: pointer;
`

const TextInputs = () => {
    
    const [data, setData] = useState({
        exhibition_name: "",
        management: "",
        description: "",
        start_date: "",
        end_date: "",
        main_image: "",
      });

    const {exhibition_name, description, start_date, end_date} = data;
    
    const handleChange = (e) => {
    setData({
        ...data,
        [e.target.name]: e.target.value,
    });
    };

    const [pamp, setPamp] = useState({
        exhibition_name: "",
        description: "",
        start_date: "",
        end_date: ""
    })
    
    const [sample, setSample] = useState(false);

    const onCreate = () => {
        const exhibition_data = {
            exhibition_name,
            description,
            start_date,
            end_date
        }
        setPamp(exhibition_data)

        // setSample((sample)=>!sample);
        setSample(true)
    }


    
    return (
        <>
        <Inputs>
        <LabelwithInput>
            <Label>전시명</Label> 
            <Input
                name="exhibition_name"
                type="text"
                value={data.exhibition_name}
                onChange={handleChange}
            ></Input>
        </LabelwithInput>
        <LabelwithInput>
            <Label>전시 설명</Label> 
            <InputBig 
                name="description"
                type="text"
                value={data.description}
                onChange={handleChange}
            ></InputBig>
        </LabelwithInput>
        <LabelwithInput>
            <Label>시작 날짜</Label>
            <Input
                name="start_date"
                type="date"
                value={data.start_date}
                onChange={handleChange}
            ></Input>
        </LabelwithInput>
        <LabelwithInput>
            <Label>종료 날짜</Label>
            <Input
                name="end_date"
                type="date"
                value={data.end_date}
                onChange={handleChange}
            ></Input>
        </LabelwithInput>
        <LabelwithInput>
            <Label>대표사진</Label> <InputBig></InputBig>
        </LabelwithInput>
        </Inputs>
        <NextButton onClick={onCreate} src={Next}/>  
        {(sample==false)?(
        <SelectColor />):(<SelectColor2 info={pamp}/>)}
        </>
    )
}

export default TextInputs
