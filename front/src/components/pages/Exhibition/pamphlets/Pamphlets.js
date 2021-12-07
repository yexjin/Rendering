import React, { useState } from 'react'
import styled from 'styled-components';
import PamphlRow from './PamphlRow';

const Contents = styled.div`
margin-top: 131px;
animation: fadein 1s;
@keyframes fadein {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
`

const Pamphls = styled.div`
height: 600px;
width: 1244px;
margin-top: 32px;
display: flex;
justify-content: center;
overflow: hidden;
`

function Pamphlets() {


    return (
        <Contents>
                <Pamphls>
                    <PamphlRow/>
                </Pamphls>
        </Contents>
    )
}

export default Pamphlets
