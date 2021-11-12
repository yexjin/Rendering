import React from 'react'
import styled from 'styled-components';

const Pamps = styled.div`
height: 700px;
overflow: auto;
overflow-x: hidden;
margin-top: 27px;
`

const Pamp = styled.div`
margin-bottom: 27px;
width: 1280px;
height: 600px;
background-color: #C3CACE;
`

function PampTile({exhibitions}) {
    return (
        <Pamps>
        {exhibitions.map((exhibition)=>
                <Pamp>
                    {exhibition.title}
                    {exhibition.subtitle}
                </Pamp>
        )};
        </Pamps>
    )
}

export default PampTile
