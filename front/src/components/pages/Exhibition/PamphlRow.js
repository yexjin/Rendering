import React, { useState } from 'react'
import styled from 'styled-components';
import Open from './Open';

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

function Pamps({ pamp, onToggle }) {
    return(
        <>
        {pamp.open === false? (
                <Pamp 
                onClick={() => onToggle(pamp.id)}>
                    {pamp.name}
                    {pamp.date}
                </Pamp>
            ):(
                <Open pamp={pamp} onToggle={onToggle}/>
            )}
        </>
    )
}

function PamphlRow({pamphlets, onToggle}) {
    return (
        <>
        {pamphlets.map((pamp)=>
                <Pamps 
                    pamp={pamp} 
                    key={pamp.id} 
                    onToggle={onToggle}>
                </Pamps>
        )};
        </>
    )
}

export default PamphlRow
