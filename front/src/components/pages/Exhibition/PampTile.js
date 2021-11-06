import React from 'react'
import styled from 'styled-components';

const Pamps = styled.div`
height: 700px;
overflow: auto;
margin-top: 27px;
`

const Pamp = styled.div`
margin-bottom: 27px;
width: 1280px;
height: 600px;
background-color: #C3CACE;
`

function PampTile({pamphlets}) {
    return (
        <Pamps>
        {pamphlets.map((data)=>
                <Pamp>
                    {data.name}
                    {data.date}
                </Pamp>
        )};
        </Pamps>
    )
}

export default PampTile
