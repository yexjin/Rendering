import React, { useState } from 'react'
import Header from '../../common/Header';
import styled from 'styled-components';

import { useUser } from '../../../components';
import {  useNavigate, Link } from 'react-router-dom';

const RegisterBox = styled.div`
    margin: 0 auto;
    margin-top: 167px;
    width: 473px;
    height: 1000px;
    margin-bottom: 280px;
`
const RegisterText = styled.div`
text-align: center;
font: normal normal bold 40px/48px Roboto;
letter-spacing: 0px;
color: #191919;
opacity: 1;
margin-bottom: 65px;
`
const Label = styled.label`
text-align: left;
font: normal normal bold 24px/29px Roboto;
letter-spacing: 0px;
color: #767676;
opacity: 1;
`
const Input = styled.input`
width: 473px;
border:0;
border-bottom: 1px solid #000000;
height: 30px;
font: normal normal normal 24px/36px Noto Sans CJK KR;
letter-spacing: -0.29px;
margin-top: 24px;
margin-bottom: 40px;
`
const SubmitButton = styled.button`
float: right;
background-color: white;
margin-top: 30px;
font: normal normal normal 18px/27px Noto Sans CJK KR;
letter-spacing: 0px;
color: #191919;
opacity: 1;
width: 181px;
height: 48px;
border: 1px solid #999999;
opacity: 1;
cursor: pointer;
`
const BackButton = styled.button`
float: left;
background-color: white;
margin-top: 30px;
font: normal normal normal 18px/27px Noto Sans CJK KR;
letter-spacing: 0px;
color: #191919;
opacity: 1;
width: 181px;
height: 48px;
border: 1px solid #999999;
opacity: 1;
cursor: pointer;
`

const ErrMessage = styled.div`
text-align: left;
font: normal normal normal 16px/24px Noto Sans CJK KR;
letter-spacing: -0.19px;
color: #767676;
opacity: 1;
`

function Register() {

  const { signupApi } = useUser();
  const navigate =  useNavigate();

  const [data, setData] = useState({
      name: "",
      job: "",
      email: "",
      pw: "",
      pwCheck: "",
      errName: undefined,
      errMessage: undefined,
    });

  const handleError = (name, value) => {
    if (name === "pwCheck") {
      if (data.pw !== value) {
        return { errName: "pwCheck", errMessage: "비밀번호가 일치하지 않습니다."}
      }
    } 

    if (name === "name") {
      if(value === "")
        return {errName: "NoInfo", errMessage: "정보를 모두 입력해주세요"}
    }

    if (name === "job") {
      if(value === "")
        return {errName: "NoInfo", errMessage: "정보를 모두 입력해주세요"}
    }

    if (name === "email") {
      if(value === "")
        return {errName: "NoInfo", errMessage: "정보를 모두 입력해주세요"}
    }

    return {
      errName: undefined,
      errMessage: undefined
    }
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const {errName=undefined, errMessage=undefined } = handleError(name, value);

    setData({
      ...data,
      [name] : value,
      errName,
      errMessage
    });
  }

  const onSubmitHandler = async (e) => {
    if (!data.errName && !data.errMessage) {
      const body = {
        email: data.email,
        name: data.name,
        password: data.pw,
        job: data.job,
      };

      try {
        alert("가입이 정상적으로 완료되었습니다.");
        navigate("/welcome");
        await signupApi(body);
      } catch(e) {
        alert(e)
      }
    }
    else{
      alert(data.errMessage)
    }
  }
    

    return (
        <>
        <Header />
        <RegisterBox>
            <RegisterText>
                Create Account
            </RegisterText>
            <form onSubmit={onSubmitHandler}>
              <Label>
                  Name
              </Label>
              <Input 
                  type="name"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
              />
              <Label>
                  Job
              </Label>
              <Input 
                  name="job"
                  type="job"
                  value={data.job}
                  onChange={handleChange}
              />

              <Label>
                  Email
              </Label>
              <Input 
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
              >
              </Input>
              <Label>
                  Password
              </Label>
              <Input 
                  type="password"
                  name="pw"
                  value={data.pw}
                  onChange={handleChange}
              >
              </Input>

              <Label>
                  Password Check
              </Label>
              <Input 
                  type="password"
                  name="pwCheck"
                  value={data.pwC}
                  onChange={handleChange}
              >
              </Input>
              {data.errName=="pwCheck" && data.errMessage && (
                <ErrMessage>{data.errMessage}</ErrMessage>)}
              {data.errName=="ok" && data.errMessage && (
                <>{}</>
              )}
              <SubmitButton onClick={onSubmitHandler}>확인</SubmitButton>
            </form>
            <Link to='/login'>
              <BackButton>뒤로가기</BackButton> 
              </Link>
        </RegisterBox>
        </>
    )
}

export default Register
