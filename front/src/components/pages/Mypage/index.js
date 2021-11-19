import React from 'react'
import styled from 'styled-components'
import SideBar from './SideBar/index'

const Box = styled.div`
display: flex;
`

const Contents = styled.div`
background-color: #F9F9F9;
width: 894px;
height: 1844px;
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
