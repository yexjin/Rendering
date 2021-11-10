import React from 'react' 
import styled from 'styled-components';

const Block = styled.div`
  position: fixed; 
  display: flex;
  position: fixed;
  top: 0;
  padding-top: 80px;
  width: 1280px;
  height: 100%;
  z-index: 99;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  opacity: 0.8;

`;

const CloseButton = styled.div`
cursor: pointer;
color: black;
position: absolute;
font-size: 32px;
margin-top: 54px;
margin-left: 54px;
`


function About({open, close}) {

    return (
        <>
        {open && (
            <Block State={open}>
                <CloseButton onClick={close}>x</CloseButton>
            </Block>
        )}     
        </>
    )
}

export default About
