import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './components/pages/Main';
import Exhibition from './components/pages/Exhibition';
import Works from './components/pages/Exhibition/Works';
import About from './components/pages/Exhibition/About';
import OpenPage from './components/pages/Exhibition/pamphlets/OpenPage';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import styled from 'styled-components';

const Box = styled.div`
margin: 0 auto;
margin-top: 80px;
width: 1244px;
`

const App = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" exact element={<Main/>} />
        <Route path="/exhibition" element={<Exhibition/>} />
        <Route path='/exhibition/:id' element={<OpenPage/>} />
        <Route path="/works" element={<Works/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Box>
  );
}

export default App;
