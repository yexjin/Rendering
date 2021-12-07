import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './components/pages/Main';
import Welcome from './components/pages/Main/Welcome';
import Exhibition from './components/pages/Exhibition';
import ExhibitionUser from './components/pages/Exhibition/ExhibitionUser';
import Comment from './components/pages/Exhibition/Comment';
import Entrance from './components/pages/Exhibition/Entrance';
import About from './components/pages/Exhibition/Entrance/About';
import Detail from './components/pages/Exhibition/Entrance/Detail';
import Open from './components/pages/Exhibition/pamphlets/Open';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Hosting from './components/pages/Hosting';
import Mypage from './components/pages/Mypage';
import styled from 'styled-components';
import PrivateRoute from './utils/privateRoute';
import MainUser from './components/pages/Main/MainUser';

const Box = styled.div`
margin: 0 auto;
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
    <>
      <Box>
        <Routes>
          <Route path="/" exact element={<Main/>} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/exhibition" element={<Exhibition/>} />
          <Route path="/user/exhibition" element={<ExhibitionUser/>} />
          <Route path='/exhibition/:id' element={<Open/>} />
          <Route path="/entrance" element={<Entrance/>} />
          <Route path="/detail" element={<Detail />} /> 
          <Route path="/about" element={<About/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/comment" element={<Comment />} />
          <Route path='/' element={<PrivateRoute />}>
            <Route path='/user/main' element={<MainUser />} />
            <Route path='/hosting' element={<Hosting/>} />
            <Route path="/mypage" element={<Mypage />} /> 
          </Route>
        </Routes>
      </Box>
    </>
  );
}

export default App;
