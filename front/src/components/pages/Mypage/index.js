import React from 'react'
import styled from 'styled-components'
import SideBar from './SideBar/index'
import Contents from './Contents/index'

const Box = styled.div`
display: flex;
overflow: auto;
overflow-y: hidden;
`


function Mypage() {
    return (
        <Box>
            <SideBar />
            <Contents />
        </Box>
    )
}

export default Mypage
