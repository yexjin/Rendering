import * as exhibitionsAPI from '../api/exhibitions'; // api/exhigitions 안의 함수 모두 불러오기
import { 
  createPromiseThunk, 
  reducerUtils,
  handleAsyncActions
 } from '../lib/asyncUtils';

/* 액션 타입 */

// Exhibitions 여러개 조회하기
const GET_EXHIBITIONS = 'GET_EXHIBITIONS'; // 요청 시작
const GET_EXHIBITIONS_SUCCESS = 'GET_EXHIBITIONS_SUCCESS'; // 요청 성공
const GET_EXHIBITIONS_ERROR = 'GET_EXHIBITIONS_ERROR'; // 요청 실패

// Exhibition 하나 조회하기
const GET_EXHIBITION = 'GET_EXHIBITION';
const GET_EXHIBITION_SUCCESS = 'GET_EXHIBITION_SUCCESS';
const GET_EXHIBITION_ERROR = 'GET_EXHIBITION_ERROR';

// thunk 를 사용 할 때, 꼭 모든 액션들에 대하여 액션 생성함수를 만들 필요는 없습니다.
// 그냥 thunk 함수에서 바로 액션 객체를 만들어주어도 괜찮습니다.
// 아주 쉽게 thunk 함수를 만들 수 있게 되었습니다.
export const getExhibitions = createPromiseThunk(GET_EXHIBITIONS, exhibitionsAPI.getExhibitions);
export const getExhibition = createPromiseThunk(GET_EXHIBITION, exhibitionsAPI.getExhibitionById);


const initialState = {
  exhibitions: reducerUtils.initial(),
  exhibition: reducerUtils.initial()
};

export default function exhibitions(state = initialState, action) {
  switch (action.type) {
    case GET_EXHIBITIONS:
    case GET_EXHIBITIONS_SUCCESS:
    case GET_EXHIBITIONS_ERROR:
      return handleAsyncActions(GET_EXHIBITIONS, 'exhibitions')(state, action);
    case GET_EXHIBITION:
    case GET_EXHIBITION_SUCCESS:
    case GET_EXHIBITION_ERROR:
      return handleAsyncActions(GET_EXHIBITION, 'exhibition')(state, action);
    default:
      return state;
  }
}