import React,{ useEffect, useState } from 'react'
import styled from 'styled-components'
import QuotesIcon from '../../../../styles/icons/에셋1.png'
import { useComments } from '../../../use'
import { useParams } from 'react-router-dom'
import {getDataFromStorage} from '../../../../utils/storage';

const Box = styled.div`
width: 280px;
height: 340px;
background-color: white;
margin-right: 53px;
margin-bottom: 60px;
`

const WhoBox = styled.div`
background-color: #A5988F;
width: 280px;
height: 70px;
z-index: 9;
margin-top: 270px;
display: flex;
padding-left: 11px;
padding-top: 15px;
`

const WhoImg = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background: #FFFFFF 0% 0% no-repeat padding-box;
opacity: 1;
`

const Nickname = styled.div`
width: 62px;
height: 24px;
/* UI Properties */
text-align: left;
font: normal normal normal 16px/24px Noto Sans CJK KR;
letter-spacing: -0.19px;
color: #FFFFFF;
opacity: 1;
margin-left: 8px;
margin-top: 7px;
`

const TQuotes = styled.img`
margin-left: 30px;
float: left;
margin-top: 10px;
`

const BQuotes = styled.img`
float: right;
margin-right: 30px;
margin-top: 20px;
`

const Text = styled.div`
/* UI Properties */
font-family: Noto Sans Bold;
font-size: 16px/24px;
letter-spacing: -0.19px;
color: #767676;
font-weight: 300;
margin-top: 75px;
width: 200px;
float: left;
margin-left: -18px;
`

const DeleteButton = styled.div`
/* UI Properties */
font-family: Noto Sans Bold;
font-size: 16px/24px;
letter-spacing: -0.19px;
color: #EE8A8A;
font-weight: 300;
margin-top: -55px;
margin-left: 110px;
cursor: pointer;
`

const Flex = styled.div`
display: flex;
`

function CommentBox() {

    const { id } = useParams();

    const userInfo = getDataFromStorage();

    const userId = userInfo.id;
    console.log(userId);

    const { comments, getComments, deleteCommentApi } = useComments();

    useEffect(()=>{
        const fetch = async () =>{
            try{
                await getComments(id);
            }catch(err){
                console.log(err);
            }
        }
        fetch();
    },[])

    const deleteHandler = async (commentId) => {
        try {
          await deleteCommentApi(commentId);
          window.location.reload(false);
        } catch (e) {
          alert(e);
        }
      };

    return (
        <>
        {comments.map((data)=>(
            <Box>
                <TQuotes src={QuotesIcon}/>
                <Text>{data.comment}</Text>
                <BQuotes src={QuotesIcon}/>
                <WhoBox>
                    <Flex>
                    <WhoImg />
                    <Nickname>{data.User.name}</Nickname>
                    {data.commenter === userId && (
                        <DeleteButton onClick={()=>deleteHandler(data.id)}>
                            삭제
                        </DeleteButton>
                    )}
                    </Flex>
                </WhoBox>
            </Box>
        ))
        }
        </>
    )
}

export default CommentBox
