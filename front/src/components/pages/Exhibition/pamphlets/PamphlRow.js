import React from 'react'
import Pamps from './Pamps';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
width: 200px;
height: 600px;
text-decoration: none;
background-color: #C3AB99;
&:hover{
    width: 400px;   
    height: 600px;  
    z-index: 10;
    cursor: pointer;
    transition: all 2s;
}

`
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

function PamphlRow() {
    return (
        <>
        {exhibitions.map(exhibition =>   
            <StyledLink to={`/exhibition/${exhibition.id}`} >
                <Pamps 
                    pamp={exhibition} 
                    key={exhibition.id}>
                </Pamps>
            </StyledLink>
        )}
        </>
    )
}

export default PamphlRow
