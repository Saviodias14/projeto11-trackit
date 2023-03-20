import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import TodayPage from "./Pages/TodayPage/TodayPage";
import token from "./constants/token";
import image from './constants/image.js'
import percentual from "./constants/percent";
import HabitPage from "./Pages/HabitPage/HabitPage";
import att from "./constants/atualization";
import HistoricPage from "./Pages/HistoricPage";
function App() {
  const [request, setRequest] = useState('')
  const [picture, setPicture] = useState('')
  const [percent, setPercent] = useState('')
  const [atualization, setAtualization] = useState(0)
  return (
    <att.Provider value={[atualization, setAtualization]}>
      <percentual.Provider value={[percent, setPercent]}>
        <image.Provider value={[picture, setPicture]}>
          <token.Provider value={[request, setRequest]}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/cadastro" element={<RegisterPage />} />
                <Route path="/hoje" element={<TodayPage />} />
                <Route path="/habitos" element={<HabitPage />} />
                <Route path="/historico" element={<HistoricPage/>} />
              </Routes>
            </BrowserRouter>
          </token.Provider>
        </image.Provider>
      </percentual.Provider>
    </att.Provider>
  );
}

export default App;
