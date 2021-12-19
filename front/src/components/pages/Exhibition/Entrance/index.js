import React, { useEffect } from 'react'
import styled from 'styled-components';
import ExamImg1 from '../../../../styles/images/yosigo.jpg';
import Architectures from './Architectures';
import { Link, useNavigate, useParams } from 'react-router-dom';
import LoveW from '../../../../styles/icons/love(w).png';
import CommentW from '../../../../styles/icons/comment(w).png';
import { useExhibitions } from '../../../use'; 

const Exhibits = styled.div`
margin-top: 70px;
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

const AboutText = styled.div`
    position: absolute;
    flex: 1;
    text-align: left;
    font: normal normal normal 24px/28px NanumMyeongjo;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    margin-top: 41px;
    margin-left: 40px;
    
    cursor: pointer;
    `

const TopText = styled.div`
    margin: 0 auto;
    text-align: center;
    position: absolute;
    flex: 1;
    
    font: normal normal 900 80px/96px Roboto;
    letter-spacing: 3.2px;
    color: #FFFFFF;
    opacity: 1;
    `

const TopImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1280px;
    height: 940px;
    img{
        width: 100%;
        height: 100%;
        
        ${TopText}{
            z-index: 3;
        }
    }
`

const Heart = styled.div`
position: fixed;
top: 13%;
left: 80%;
width: 45px;
height: 45px;
img{
    width: 24px;
    height: 24px;
    margin-top: 10px;
    margin-left: 10px;
}
background-color: #00000099;
opacity: 1;
border-radius: 50%;
cursor: pointer;
`

const Comment = styled.div`
position: fixed;
top: 20%;
left: 80%;
width: 45px;
height: 45px;
img{
    width: 24px;
    height: 24px;
    margin-top: 10px;
    margin-left: 10px;
}
background-color: #00000099;
opacity: 1;
border-radius: 50%;
cursor: pointer;
`

const Arts = styled.div`
margin-top: 50px;
`
const Back = styled.div`
font: normal normal normal 18px/30px Roboto;
letter-spacing: 0px;
color: #191919;
opacity: 1;
position: absolute;
margin-top: -40px;
cursor: pointer;
margin-left: 10px;
`


function Entrance() {
    
    const navigate = useNavigate();

    const { id } = useParams();

    const moveHandler = async(id) => {
        try {
            navigate(`/comment/${id}`);
        } catch (e) {
            alert(e);
        }
    }

    const aboutHandler = async(id) => {
        try{
            navigate(`/about/${id}`);
        } catch(e){
            alert(e);
        }
    }
    const { exhibition, getExhibition } = useExhibitions();

    useEffect(() => {
        const fetch = async () => {
          try {
            await getExhibition(id);
          } catch(err){
            console.log(err);
          }
        };
        fetch();
      }, [])


    return (
        <>
        <Link to='/user/exhibition'>
        <Back>
            뒤로가기
        </Back>
        </Link>
        <Heart>
            <img src={LoveW}/>
        </Heart>
        <Comment onClick={()=>moveHandler(id)}>
            <img src={CommentW}/>
        </Comment>
        <Exhibits>
            <AboutText onClick={()=>aboutHandler(id)}>About</AboutText>

        <TopImg>
            <img src={"/img/"+exhibition.main_image}/>
            <TopText>{exhibition.exhibition_name}</TopText>
        </TopImg>

        <Arts>
            <Architectures exhibition={exhibition}/>
        </Arts>
        </Exhibits>
        </>
    )
}

export default Entrance
