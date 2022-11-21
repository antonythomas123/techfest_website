import React from 'react';
import Home from './components/home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Workshop from './components/workshops/Workshop';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path = '/' element={<Home/>}/>
        <Route path = '/workshop' element={<Workshop/>}/>
      </Routes>
    </Router>
  )
}

export default App