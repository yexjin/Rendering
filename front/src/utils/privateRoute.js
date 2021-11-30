import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { getDataFromStorage } from './storage';


const PrivateRoute = () => {
    const isLogin = () => {
      const userInfo = getDataFromStorage();
      if (userInfo === null) {
        alert("로그인 필요한 페이지입니다.");
        return false;
      }
      return true;
    };
  
    return (
          isLogin() ? <Outlet /> : <Navigate to="/login" />
    );
  };

export default PrivateRoute
