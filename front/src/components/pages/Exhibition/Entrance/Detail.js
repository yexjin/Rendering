import React from 'react'
import styled from 'styled-components';
import img1 from '../../../../styles/images/e1.jpg';

const Background = styled.div`
animation: fadein 1s;
@keyframes fadein {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
background-color: #101010;
img{
    width: 100%;
    height: 100%;
    opacity: 0.5;
    transition: all 0.5s;
}
`

function Detail() {
    return (
        <Background>
            <img src={img1}>

            </img>
        </Background>
    )
}

export default Detail
