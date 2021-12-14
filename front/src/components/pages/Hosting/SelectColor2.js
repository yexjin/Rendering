import React,{ useState } from 'react'
import styled from 'styled-components'
import MakedSample from './MakedSample'

const Colors = styled.div`
margin-left: 28px;
width: 45px;
`

const Dot1 = styled.div`
width: 45px;
height: 45px;
border-radius: 50%;
background-color: #F5F1EE;
margin-bottom: 10px;
cursor: pointer;
border: ${props => props.click == true ? "1px solid #707070" : "0"};
`
const Dot2 = styled.div`
width: 45px;
height: 45px;
border-radius: 50%;
background-color: #DDD6CD;
margin-bottom: 10px;
cursor: pointer;
border: ${props => props.click == true ? "1px solid #707070" : "0"};
`
const Dot3 = styled.div`
width: 45px;
height: 45px;
border-radius: 50%;
background-color: #C3AB99;
margin-bottom: 10px;
cursor: pointer;
border: ${props => props.click == true ? "1px solid #707070" : "0"};
`
const Dot4 = styled.div`
width: 45px;
height: 45px;
border-radius: 50%;
background-color: #D5BCAC;
margin-bottom: 10px;
cursor: pointer;
border: ${props => props.click == true ? "1px solid #707070" : "0"};
`
const Dot5 = styled.div`
width: 45px;
height: 45px;
border-radius: 50%;
background-color: #97887D;
margin-bottom: 10px;
cursor: pointer;
border: ${props => props.click == true ? "1px solid #707070" : "0"};
`
const Dot6 = styled.div`
width: 45px;
height: 45px;
border-radius: 50%;
background-color: #DDD6CD;
margin-bottom: 10px;
cursor: pointer;
border: ${props => props.click == true ? "1px solid #707070" : "0"};
`

function SelectColor2({info}) {

    const [color, setColor] = useState("#C3AB99");
    const [toggle, setToggle] = useState({
        '1': false,
        '2': false,
        '3': false,
        '4': false,
        '5': false,
        '6': false,
    });

    const onClick1 = () => {
        setColor("#F5F1EE")
        setToggle({
            '1': true,
            '2': false,
            '3': false,
            '4': false,
            '5': false,
            '6': false,
        })
    }
    const onClick2 = () => {
        setColor("#DDD6CD")
        setToggle({
            '1': false,
            '2': true,
            '3': false,
            '4': false,
            '5': false,
            '6': false,
        })
    }
    const onClick3 = () => {
        setColor("#C3AB99")
        setToggle({
            '1': false,
            '2': false,
            '3': true,
            '4': false,
            '5': false,
            '6': false,
        })
    }
    const onClick4 = () => {
        setColor("#D5BCAC")
        setToggle({
            '1': false,
            '2': false,
            '3': false,
            '4': true,
            '5': false,
            '6': false,
        })
    }
    const onClick5 = () => {
        setColor("#97887D")
        setToggle({
            '1': false,
            '2': false,
            '3': false,
            '4': false,
            '5': true,
            '6': false,
        })
    }
    const onClick6 = () => {
        setToggle({
            '1': false,
            '2': false,
            '3': false,
            '4': false,
            '5': false,
            '6': true,
        })
    }


    return (
        <>
        <MakedSample color={color} info={info}/>
        <Colors>
            <Dot1 onClick={onClick1} click={toggle['1']} />
            <Dot2 onClick={onClick2} click={toggle['2']}/>
            <Dot3 onClick={onClick3} click={toggle['3']}/>
            <Dot4 onClick={onClick4} click={toggle['4']}/>
            <Dot5 onClick={onClick5} click={toggle['5']}/>
            <Dot6 onClick={onClick6} click={toggle['6']}/>
        </Colors>
        </>
    )
}

export default SelectColor2
