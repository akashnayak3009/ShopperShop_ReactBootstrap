import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NavbarUpper from './NavbarUpper/NavbarUpper'

import LoginForm from "./LoginForm/LoginForm";
import MainPage from "./MainPage/MainPage";


const Appy = () => {
  return (
    <BrowserRouter>
    <div>
     <div> <NavbarUpper /></div>
      <Routes>
        <Route path="home" element = {<MainPage/>} />
        <Route path="/login" element={<LoginForm/>} />
      </Routes>
    </div>
</BrowserRouter>
  );
};

export default Appy;
