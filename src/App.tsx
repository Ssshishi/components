import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from './page/home'

const App: React.FC = () => (
  <div className="App">
    <Routes>
      <Route path='/' element={<Home/>}></Route> 
      <Route></Route> 
    </Routes>
  </div>
);

export default App;
