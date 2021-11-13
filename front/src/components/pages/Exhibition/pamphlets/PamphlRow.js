import React from 'react'
import Pamps from './Pamps';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
width: 200px;
height: 600px;
text-decoration: none;
background-color: #C3AB99;
&:hover{
    width: 400px;   
    height: 600px;  
    z-index: 10;
    cursor: pointer;
    transition: all 2s;
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
