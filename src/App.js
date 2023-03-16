import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import TodayPage from "./Pages/TodayPage/TodayPage";
import token from "./constants/token";
import image from './constants/image.js'
function App() {
  const [request, setRequest] = useState('')
  const [picture, setPicture] = useState('')
  return (
    <image.Provider value={[picture, setPicture]}>
      <token.Provider value={[request, setRequest]}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/cadastro" element={<RegisterPage />} />
            <Route path="/hoje" element={<TodayPage />} />
          </Routes>
        </BrowserRouter>
      </token.Provider>
    </image.Provider>
  );
}

export default App;
