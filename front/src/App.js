import React from 'react';
import Main from './components/pages/Main';
import Exhibition from './components/pages/Exhibition';
import styled from 'styled-components';

const Box = styled.div`
margin: 0 auto;
margin-top: 80px;
width: 1244px;
`

function App() {
  return (
    <Box>
      <Main />
    </Box>
  );
}

export default App;
