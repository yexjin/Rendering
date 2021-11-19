import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './components/pages/Main';
import Welcome from './components/pages/Main/Welcome';
import Exhibition from './components/pages/Exhibition';
import Entrance from './components/pages/Exhibition/Entrance';
import About from './components/pages/Exhibition/Entrance/About';
import Detail from './components/pages/Exhibition/Entrance/Detail';
import OpenPage from './components/pages/Exhibition/pamphlets/OpenPage';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Hosting from './components/pages/Hosting';
import styled from 'styled-components';

const Box = styled.div`
margin: 0 auto;
margin-top: 80px;
width: 1244px;
animation: fadein 1s;
@keyframes fadein {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
`

const App = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" exact element={<Main/>} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/exhibition" element={<Exhibition/>} />
        <Route path='/hosting' element={<Hosting />} />
        <Route path='/exhibition/:id' element={<OpenPage/>} />
        <Route path="/entrance" element={<Entrance/>} />
        <Route path="/detail" element={<Detail />} /> 
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Box>
  );
}

export default App;
