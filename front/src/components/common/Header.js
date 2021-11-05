import React from 'react'
import styled from 'styled-components';

const Head = styled.div`
    display: flex;
    justify-content: space-between;
`

function Header() {
    return (
        <Head>
            <div>LOGO</div>
            <button>마이페이지</button>
        </Head>
    )
}

export default Header
