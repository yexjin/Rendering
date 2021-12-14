import React from 'react'
import styled from 'styled-components'
import NextImg from '../../../../styles/icons/next2.png'

const Content = styled.div`
margin-left: 100px;
margin-top: 100px;

`

const ImgDiv = styled.img`
transform: rotate( 180deg );
`
const Text = styled.div`
width: 792px;
font: normal normal normal 18px/30px Roboto;
letter-spacing: 0px;
color: #191919;
opacity: 1;
`
function NullContents() {
    return (
        <Content>
            {/* <ImgDiv src={NextImg} /> */}
            <Text>전시가 선택되지 않았어요</Text> <br/>
            <Text>"In progress" 목록에서 진행중인 전시카드를 클릭해주세요 :)</Text>
        </Content>
    )
}

export default NullContents
