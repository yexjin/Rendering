import React, { useEffect } from 'react'
import styled from 'styled-components'
import SideBar from './SideBar/index'
import NullContents from './Contents/NullContents'

const Box = styled.div`
display: flex;
overflow: auto;
overflow-y: hidden;
`


function Null() {

    return (
        <Box>
            <SideBar />
            <NullContents />
        </Box>
    )
}

export default Null