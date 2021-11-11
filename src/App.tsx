import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

import Home from './pages/Home';
import Quiz from './pages/Quiz';
import SortPic from './pages/SortPic'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/quiz" element={<Quiz/>} />
        <Route path="/sortpic" element={<SortPic/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
