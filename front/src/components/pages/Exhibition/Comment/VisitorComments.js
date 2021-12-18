import React from 'react'
import styled from 'styled-components'
import CommentBox from './CommentBox'
import InputComment from './InputComment'

const CommentPage = styled.div`
width: 1386px;
height: 898px;
overflow-y: scroll;
::-webkit-scrollbar { 
    display: none;
}
display: flex;
justify-content: flex-start;
align-content: flex-start;
flex-wrap: wrap;
margin: 0 auto;
margin-top: 102px;
padding-left: 53px;
padding-bottom: 100px;
`



function VisitorComments() {
    return (
        <CommentPage>
            <CommentBox />       
        </CommentPage>
    )
}

export default VisitorComments
