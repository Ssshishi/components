import React from "react";
import { Route, Routes } from "react-router-dom";
import Mock from './mock';
import axios from 'axios'


import Home from './page/home'
import { NavBar } from "antd-mobile";

const App: React.FC = () => {
  const fetchData = () => {
    axios.post('/search', {
      params: {
        name: 'jack'
      }
    }).then((res) => {
      console.log(res.data);

    }).catch((e) => console.error(e))
  }
  return  (
    <div className="App">
      <NavBar onBack={fetchData}>APP</NavBar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
