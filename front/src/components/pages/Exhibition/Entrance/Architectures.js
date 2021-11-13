import React from 'react'
import img1 from '../../../../styles/images/e1.jpg';
import img2 from '../../../../styles/images/e2.jpg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Things = styled.div`
position: absolute;
margin-top: 30px;

z-index: 1000;
width: 1280px;
height: 1300px;

overflow-y: auto;
overflow-x: hidden;
`;

const RowImgs = styled.div`
width: 560px;
height: 370px;
margin-top: 60px;
background: #ffffff;
img{
    width: 100%;
    height: 100%;
}
:hover {
  img {
    opacity: 0.5;
    transition: all 0.5s;
  }
}
`

const ColImgs = styled.div`
width: 370px;
height: 600px;
float: right;
margin-top: 40px;

background: #ffffff;
img{
    width: 100%;
    height: 100%;
}
:hover {
  img {
    opacity: 0.5;
    transition: all 0.5s;
  }
}
`

function Architectures() {
    return (
        <>
        <Things>
            <Link to='/detail'>
            <RowImgs>
                <img src={img1}/>
            </RowImgs>
            </Link>
            <ColImgs>
                <img src={img2}/>
            </ColImgs>
            <RowImgs>
                <img src={img1}/>
            </RowImgs>
            <ColImgs>
                <img src={img2}/>
            </ColImgs>
            <RowImgs>
                <img src={img1}/>
            </RowImgs>
            <ColImgs>
                <img src={img2}/>
            </ColImgs>
        </Things>
        </>
    )
}

export default Architectures
