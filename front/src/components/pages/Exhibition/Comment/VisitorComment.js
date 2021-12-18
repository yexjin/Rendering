import React,{ useEffect } from 'react'
import styled from 'styled-components'
import BackIcon from '../../../../styles/icons/back.png'
import { useParams, useNavigate } from 'react-router-dom'
import VisitorComments from './VisitorComments'
import { useExhibitions } from '../../../use'

const PageBox = styled.div`
background-color: #E1DCD1;
width: 100vw;
height: 100vh;
top: 0;
right: 0;
bottom: 0;
left: 0;
position: fixed;
align-items: center;
text-align: center;
`

const Top = styled.div`
width: 1279px;
display: flex;
margin: 0 auto;
margin-top: 119px;
`

const BackButton = styled.img`
width: 22px;
height: 22px;
margin-left: 54px;
margin-right: 340px;
`

const Title = styled.div`
font: normal normal 800 32px/36px NanumSquare;
letter-spacing: 1.28px;
color: #191919;
opacity: 1;
margin-top: -9px;
`

function VisitorComment() {

    const { exhibition, getExhibition } = useExhibitions()

    const navigate = useNavigate();

    const { id } = useParams();

    const moveHandler = async(id) => {
        try {
            navigate(`/visitor/${id}`);
        } catch (e) {
            alert(e);
        }
    }

    useEffect(()=>{
    const fetch = async () => {
        try{
            await getExhibition(id);
        } catch(err){
            console.log(err)
        }
    }
    fetch();
    },[])

    return (
        <PageBox>
            <Top>
                <BackButton src={BackIcon} onClick={()=>moveHandler(id)}/>
                <Title>{exhibition.exhibition_name}</Title>
            </Top>
            <VisitorComments />
        </PageBox>
    )
}

export default VisitorComment
