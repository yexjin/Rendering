import React, { useState } from 'react'
import Header from '../../common/Header';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LoginBox = styled.div`
    margin: 0 auto;
    margin-top: 167px;
    width: 473px;
    height: 471px;
    background-color: #F9F9F9;
`

const LoginText = styled.div`
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
background-color: #F9F9F9;
width: 473px;
border:0;
border-bottom: 1px solid #000000;
height: 30px;
font: normal normal normal 24px/36px Noto Sans CJK KR;
letter-spacing: -0.29px;
margin-top: 24px;
margin-bottom: 40px;
`

const Flex = styled.div`
display: flex;
justify-content: space-between;
`

const AccountButton = styled.div`
margin-top: 42px;
height: 27px;
vertical-align: center;
cursor: pointer;
text-align: left;
font: normal normal normal 22px/27px Roboto;
letter-spacing: 0px;
color: #767676;
opacity: 1;
`

const LoginButton = styled.button`
background-color: #F9F9F9;
margin-top: 30px;
font: normal normal normal 18px/27px Noto Sans CJK KR;
letter-spacing: 0px;
color: #191919;
opacity: 1;
width: 181px;
height: 48px;
border: 1px solid #999999;
opacity: 1;
`

function Login() {

    const [data, setData] = useState({
        email: "",
        pw: "",
      });

    const handleChange = (e) => {
    setData({
        ...data,
        [e.target.name]: e.target.value,
    });
    };

    // const submitHandler = async () => {
    //     try {
    //       const request = {
    //         email: data.email,
    //         password: data.password,
    //       };
    
    //       const response = await loginApi(request);
    
    //       if (response.data) {
    //         saveDataToStorage(response.data);
    //       }
    
    //       history.push("/professor/main");
    //     } catch (e) {
    //       alert("로그인 실패");
    //     }
    //   };
    

    return (
        <>
         <Header />
        <LoginBox>
            <LoginText>
                Login
            </LoginText>
            <Label>
                Email
            </Label>
            <Input 
                name="email"
                type="email" 
                value={data.email}
                onChange={handleChange}
                >
            </Input>
            <Label>
                Password
            </Label>
            <Input 
                name="pw"
                type="password"
                value={data.pw}
                onChange={handleChange}
                >
            </Input>
            <Flex>
                <Link to="/register" style={{textDecoration: 'none'}}>
                    <AccountButton>
                        Create Account
                    </AccountButton>
                </Link>
                <LoginButton>확인</LoginButton>
            </Flex>
        </LoginBox>
        </>
    )
}

export default Login;