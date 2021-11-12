import React, { useState } from 'react'
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
border-radius: 15px;
background: #74747480 0% 0% no-repeat padding-box;
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
margin-top: 32px;
display: flex;
justify-content: center;
`

function Pamphlets({ exhibitions }) {

    const [sort, setSort] = useState(true);

    const toSlide = () => {
        setSort(true);
    }

    const toTile = () => {
        setSort(false);
    }

    return (
        <Contents>
            <Exams>
                <Slide onClick={toSlide}/>
                <Tile onClick={toTile}/>
            </Exams>
            {sort === true ? (
                <Pamphls>
                    <PamphlRow exhibitions={exhibitions}/>
                </Pamphls>
            ):(
                <PampTile exhibitions={exhibitions}/>
            )}
        </Contents>
    )
}

export default Pamphlets
