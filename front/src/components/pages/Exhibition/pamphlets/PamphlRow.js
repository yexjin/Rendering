import React from 'react'
import Pamps from './Pamps';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
background: #D9CCC1;
width: 200px;
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

function PamphlRow({ exhibitions}) {
    return (
        <>
        {exhibitions.map(exhibition =>   
            <StyledLink to={`/exhibition/${exhibition.id}`} >
                <Pamps 
                    pamp={exhibition} 
                    key={exhibition.id}>
                </Pamps>
            </StyledLink>
        )}
        </>
    )
}

export default PamphlRow
