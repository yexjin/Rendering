import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Pamphlets from '../components/pages/Exhibition/pamphlets/Pamphlets';
import { getExhibitions } from '../modules/exhibitions';
import OpenPage from '../components/pages/Exhibition/pamphlets/OpenPage';
import Open from '../components/pages/Exhibition/pamphlets/Open';
function ExhibitionsContainer() {
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
  <Pamphlets exhibitions={data} />
  <OpenPage exhibitions={data} />
  {/* <Open exhibitions={data} /> */}
  </>
    );
}

export default ExhibitionsContainer;