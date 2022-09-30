import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './screens/About';
import Home from './screens/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
