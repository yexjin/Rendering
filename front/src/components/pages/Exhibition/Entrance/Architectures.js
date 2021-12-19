import React from 'react'
import img1 from '../../../../styles/images/e1.jpg';
import img2 from '../../../../styles/images/e2.jpg';
import styled from 'styled-components';
import ExamImg2 from '../../../../styles/images/backgroundImg.png';
// import { useNavigate } from 'react-router-dom';

const Things = styled.div`
position: absolute;
margin-top: 30px;
width: 1280px;
height:auto;

justify-content: center;
align-items: center;
img{
    display: flex;
    position: sticky;
    top: 25%;
    height: 340px;
    width: 780px;
    margin: 0 auto;

}



`;

const RowImgs = styled.div`
    z-index:5;
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
        /* opacity: 0.5; */
        transition: all 0.5s;
        transform: scale(1.3);

    }
    }
`

const ColImgs = styled.div`
width: 370px;
height: 600px;
float: right;
margin-top: 40px;
margin-left: 40px;

background: #ffffff;
img{
    width: 100%;
    height: 100%;
}
:hover {
  img {
    transition: all 0.5s;
    transform: scale(1.3);
  }
}
`

function Architectures({exhibition}) {

    // const navigate = useNavigate();
    
    // const detailHanlder = async(img) =>{
    //     try{
    //         navigate(`/detail/${img}`);
    //     } catch(e) {
    //         alert(e);
    //     }
    // }

    return (
        <>
        <Things>
            <img src={"/img/" + exhibition.sub_image}/>
            { exhibition.Works.map((image)=>(
                <>
                    <ColImgs>
                        <img src={"/img/"+image.thumbnail}/>
                    </ColImgs>
                    <RowImgs>
                        <img src={"/img/"+image.thumbnail}/>
                    </RowImgs>         
                </>
            ))
            }
        </Things>
        </>
    )
}

export default Architectures
