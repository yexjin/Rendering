// n 밀리세컨드동안 기다리는 프로미스를 만들어주는 함수
const sleep = n => new Promise(resolve => setTimeout(resolve, n));

// 가짜 exhibitions 목록 데이터
const exhibitions = [
  {
    id: 1,
    title: 'YOSIGO',
    subtitle1: '요시고 사진전',
    subtitle2: '따뜻한 휴일의 기록',
    content1: '"따뜻한 빛과 피사체가 균형을 이루는 순간"',
    content2: '여행 감성을 자극하는 따뜻한 휴일의 기록',
    startDate: '06.23',
    endDate: '12.25',
  },
  {
    id: 2,
    title: 'HOSIGO',
    subtitle1: '호시고 사진전',
    subtitle2: '따뜻한 휴일의 기록',
    content1: '"따뜻한 빛과 피사체가 균형을 이루는 순간"',
    content2: '여행 감성을 자극하는 따뜻한 휴일의 기록',
    startDate: '06.23',
    endDate: '12.25',
  },
  {
    id: 3,
    title: 'GOSIGO',
    subtitle1: '고시고 사진전',
    subtitle2: '따뜻한 휴일의 기록',
    content1: '"따뜻한 빛과 피사체가 균형을 이루는 순간"',
    content2: '여행 감성을 자극하는 따뜻한 휴일의 기록',
    startDate: '06.23',
    endDate: '12.25',
  },
  {
    id: 4,
    title: 'ZOSIGO',
    subtitle1: '조시고 사진전',
    subtitle2: '따뜻한 휴일의 기록',
    content1: '"따뜻한 빛과 피사체가 균형을 이루는 순간"',
    content2: '여행 감성을 자극하는 따뜻한 휴일의 기록',
    startDate: '06.23',
    endDate: '12.25',
  },
  {
    id: 5,
    title: 'SOSIGO',
    subtitle1: '소시고 사진전',
    subtitle2: '따뜻한 휴일의 기록',
    content1: '"따뜻한 빛과 피사체가 균형을 이루는 순간"',
    content2: '여행 감성을 자극하는 따뜻한 휴일의 기록',
    startDate: '06.23',
    endDate: '12.25',
  },
  {
    id: 6,
    title: 'WOSIGO',
    subtitle1: '우시고 사진전',
    subtitle2: '따뜻한 휴일의 기록',
    content1: '"따뜻한 빛과 피사체가 균형을 이루는 순간"',
    content2: '여행 감성을 자극하는 따뜻한 휴일의 기록',
    startDate: '06.23',
    endDate: '12.25',
  }
];

// 포스트 목록을 가져오는 비동기 함수
export const getExhibitions = async () => {
  // await sleep(500); // 0.5초 쉬고
  return exhibitions; // exhibitions 배열
};

// ID로 전시를 조회하는 비동기 함수
export const getExhibitionById = async id => {
  // await sleep(500); // 0.5초 쉬고
  return exhibitions.find(exhibition => exhibition.id === id); // id 로 찾아서 반환
};