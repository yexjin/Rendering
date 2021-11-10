import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
      <Routes>
        <Route path="/" exact={true} element={<Main/>} />
        <Route path="/exhibition" element={<Exhibition/>} />
      </Routes>
    </Box>
  );
}

export default App;
