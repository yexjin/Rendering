import React from 'react'
import Header from '../../common/Header';
import styled from 'styled-components';

const Contents = styled.div`
display: flex;
`

const BigText = styled.div`
font-size: 50px;
`
const SmallText = styled.div`
font-size: 30px;
`

const Buttons = styled.div`
    display: flex;
`

const Img = styled.div`
    width: 100px;
    height: 100px;
    background-color: gray;
`

function Main() {
    return (
        <>
        <Header />
        <Contents>
            <div>
                <BigText>
                    About us
                </BigText>
                <SmallText>
                    설명글설명글설명글설명글설명글설명글설명글 <br />
                    설명글설명글설명글설명글설명글설명글설명글
                </SmallText>
                <Buttons>
                    <button>전시 보러가기</button>
                    <button>전시 열기</button>
                </Buttons>
            </div>
            <Img>예시이미지</Img>
        </Contents>
        </>
    )
}

export default Main
