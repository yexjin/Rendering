import React from 'react'
import styled from 'styled-components';

const Pamp = styled.div`
background: #D9CCC1 0% 0% no-repeat padding-box;
width: 400px;
height: 600px;
border: 1px solid #E5DFD8;
&:hover{
    position: absolute;
    width: 400px;   
    height: 600px;  
    z-index: 10;
    cursor: pointer;
}
`

function Pamps({ pamp }) {
    return(
    <>
        <Pamp>
            {pamp.title}
            {pamp.subtitle}
        </Pamp>     
        </>
    )
}

export default Pamps
