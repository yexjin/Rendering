import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import { getExhibitions } from '../../../../modules/exhibitions';
import Card from './Card'

const Title = styled.div`
text-align: left;
font: normal normal normal 24px/29px Roboto;
letter-spacing: 0.96px;
color: #F9F9F9;
opacity: 1;
margin-left: 24px;
margin-top: 42px;
`

const NewButton = styled.button`
margin-top: 30px;
font: normal normal normal 18px/27px Noto Sans CJK KR;
letter-spacing: 0px;
color: #FFFFFF;
opacity: 1;
width: 302px;
height: 48px;
margin-left: 24px;
border: 1px solid #FFFFFF;
opacity: 1;
border-radius: 5px;
background-color: #A5988F;
margin-bottom: 32px;
`

function Progress() {
const { data, loading, error } = useSelector(state => state.exhibitions.exhibitions);
  const dispatch = useDispatch();

  // 컴포넌트 마운트 후 exhibitions 목록 요청
  useEffect(() => {
    if (data) return;
    dispatch(getExhibitions());
  }, [data, dispatch]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

    return (
        <>
        <Title>In progress</Title>
        <NewButton>New Project</NewButton>
        <Card projects={data} />
        </>
    )
}

export default Progress
