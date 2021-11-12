import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getExhibition, clearExhibition } from '../modules/exhibitions';
import Open from '../components/pages/Exhibition/pamphlets/Open';

function ExhibitionContainer({ exhibitionId }) {
  const { data, loading, error } = useSelector(state => state.exhibitions.exhibition);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExhibition(exhibitionId));
    return () => {
      dispatch(clearExhibition());
    };
  }, [exhibitionId, dispatch]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  return <Open exhibition={data} />;
}

export default ExhibitionContainer;