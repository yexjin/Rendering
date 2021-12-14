import React from 'react'
import TopBox from './TopBox'
import BottomBox from './BottomBox'
import styled from 'styled-components'


const Box = styled.div`
`


function Contents() {
    return (
        <Box>
            <TopBox />
            <BottomBox />
        </Box> 
    )
}

export default Contents