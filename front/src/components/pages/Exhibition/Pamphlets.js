import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import PamphlRow from './PamphlRow';
import PampTile from './PampTile';

const Contents = styled.div`
margin-top: 131px;
`

const Exams = styled.div`
display: flex;
width: 80px;
margin: 0 auto;
`
const Slide = styled.div`
width: 20px;
height: 20px;
background: #74747480 0% 0% no-repeat padding-box;
border-radius: 15px;
opacity: 1;
margin-right: 10px;
`

const Tile = styled.div`
width: 20px;
height: 20px;
background: #74747480 0% 0% no-repeat padding-box;
border-radius: 15px;
opacity: 1;
margin-right: 30px;
`

const Pamphls = styled.div`
height: 600px;
background-color: gray;
margin-top: 32px;
display: flex;
justify-content: center;
`

const pamphlets = [
      {
        id: 1,
        name: '요시고사진전',
        date: '11/11',
        open: false,
      },
      {
        id: 2,
        name: '정의진사진전',
        date: '11/11',
        open: false,
      },
      {
        id: 3,
        name: '정의진바보',
        date: '11/11',
        open: false,
      },
      {
        id: 4,
        name: '정의진멍청잉',
        date: '11/11',
        open: false,
      },
      {
        id: 5,
        name: '정의진깔깔',
        date: '11/11',
        open: false,
      }
    ];


function Pamphlets() {

    const [sort, setSort] = useState(true);
    const [pamphlet, setPamphlet] = useState(pamphlets);

    const toSlide = () => {
        setSort(true);
    }

    const toTile = () => {
        setSort(false);
    }

    console.log(sort);

    const onToggle = id => {
      setPamphlet(
        pamphlet.map(data =>
          data.id === id ? { ...data, open: !data.open } : data
        )
      );
    };


    return (
        <Contents>
            <Exams>
                <Slide onClick={toSlide}/>
                <Tile onClick={toTile}/>
            </Exams>
            {sort === true ? (
                <Pamphls>
                    <PamphlRow pamphlets={pamphlet} onToggle={onToggle}/>
                </Pamphls>
            ):(
                <PampTile pamphlets={pamphlets}/>
            )};
        </Contents>
    )
}

export default Pamphlets
