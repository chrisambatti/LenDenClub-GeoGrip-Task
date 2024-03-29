import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import Edit from './Pages/Edit';
import Add from './Pages/Add';
import ShowAddress from './Pages/ShowAddress';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/add" element={<Add/>} />
          <Route path="/edit" element={<Edit/>} />
          <Route path="/show-address" element={<ShowAddress/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
