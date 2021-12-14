import React,{useEffect} from 'react'
import styled from 'styled-components'
import {getDataFromStorage} from '../../../../utils/storage';
import {usePamphlets} from '../../../use';


const Profile = styled.div`
display: flex;
margin-bottom: 42px;
`

const MyImg = styled.div`
width: 80px;
height: 80px;
/* UI Properties */
background: #FFFFFF 0% 0% no-repeat padding-box;
opacity: 1;
border-radius: 50%;
margin-left: 35px;
margin-top: 13px;
`

const NameBox = styled.div`
font-family: NanumMyeongjo Regular;
text-align: left;
letter-spacing: 0px;
margin-top: 30px;
margin-left: 16px;
`

const Name = styled.div`
font-size: 18px;
color: #191919;
opacity: 1;
`

const NickName = styled.div`
font-size: 13px;
color: #FFFFFF;
opacity: 1;
margin-top: 8px;
`

const Items = styled.div`
width: 300px;
display: flex;
margin-left: 35px;
margin-bottom: 39px;
`

const Item = styled.div`
width: 150px;
margin-right: 40px;
`

const Title = styled.div`
text-align: left;
font: normal normal normal 19px Roboto;
font-weight: 400;
color: #F9F9F9;
opacity: 1;
`

const Number = styled.div`
text-align: left;
font: normal normal bold 24px/29px Roboto;
letter-spacing: 0.96px;
color: #191919;
opacity: 1;
margin-top: 11px;
`

function Inform() {

    const name = getDataFromStorage().name;
    const nickName = getDataFromStorage().nickName;
    const { pamphletsList, listAllOngoing } = usePamphlets();

    useEffect(() => {
        const fetch = async () => {
          try {
            await listAllOngoing();
          } catch(err){
            console.log(err);
          }
        };
        fetch();
      }, [])

    const onGoing = pamphletsList.length;

    return (
        <>
            <Profile>
                <MyImg />
                <NameBox>
                    <Name>{name}</Name>
                    <NickName>{nickName}</NickName>
                </NameBox>
            </Profile>
            <Items>
                <Item>
                    <Title>Total projects</Title>
                    <Number>| 3</Number>
                </Item>
                <Item>
                    <Title>Completed</Title>
                    <Number>| 3</Number>
                </Item>
            </Items>
            <Items>
                <Item>
                    <Title>In progress</Title>
                    <Number>| {onGoing}</Number>
                </Item>
                <Item>
                    <Title>Schedule</Title>
                    <Number>| 3</Number>
                </Item>
            </Items>
        </>
    )
}

export default Inform