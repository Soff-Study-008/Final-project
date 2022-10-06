import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './screens/About';
import Home from './screens/Home';
import { Infomusic } from './screens/Infomusic';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/infomusic' element={<Infomusic/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
