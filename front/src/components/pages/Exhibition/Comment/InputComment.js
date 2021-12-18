import React,{ useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom';
import { useComments } from '../../../use';
import { getDataFromStorage } from "../../../../utils/storage"

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
margin-top: 89px;
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

const Input = styled.textarea`
/* UI Properties */
text-align: center;
font-family: Noto Sans Bold;
font-size: 16px/24px;
letter-spacing: -0.19px;
color: #767676;
opacity: 1;
background-color: white;
border-style: none;
margin-top: 123px;
`

function InputComment() {

    const userInfo = getDataFromStorage();
    const { id } = useParams();

    const { createCommentApi } = useComments();
    const [data, setData] = useState({
        comment: "",
      });

    const handleChange = (e) => {
    setData({
        ...data,
        [e.target.name]: e.target.value,
    });
    };

    const onSubmitHandler = async (e) => {
        const body = {
            comment: data.comment,
            exhibition: id
        }
        try{
            await createCommentApi(body)
            alert('댓글입력이 완료되었습니다.');
            window.location.reload(false);
        } catch(e) {
            alert(e);
        }
    }

    const onKeyPress = (e) => {
        if(e.key=="Enter"){
            onSubmitHandler();
        }
    }

    return (
        <Box>
            <Input 
                name="comment"
                type="text"
                placeholder="댓글을 달아보세요!"
                onChange={handleChange}
                onKeyPress={onKeyPress}
            />
            <WhoBox>
                <WhoImg/>
                <Nickname>{userInfo.name}</Nickname>
            </WhoBox>
        </Box>
    )
}

export default InputComment
