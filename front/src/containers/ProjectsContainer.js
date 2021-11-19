import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getExhibitions } from '../modules/exhibitions';
import Progress from '../components/pages/Mypage/SideBar/Progress';

function ProjectsContainer() {
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
      <Progress projects={data} />
    </>
    );
}

export default ProjectsContainer;