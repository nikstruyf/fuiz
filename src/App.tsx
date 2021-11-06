import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import Home from './pages/Home';
import Quiz from './pages/Quiz';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/quiz" element={<Quiz/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
