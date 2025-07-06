import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Statistics from './Components/Statistics';
import Home from './Pages/Home';
import Progress from './Pages/Progress';
import Questions from './Pages/Questions';
import Utilities from './Pages/Utilities';
import Plans from './Pages/Plans';
import Footer from './Components/Footer';
import MessageButton from './Components/MessageButton';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

function MainSections() {
  return (
    <>
      <Home />
      <Statistics />
      <Utilities />
      <Progress />
      <Plans />
      <Questions />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainSections />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
        <MessageButton />
      </div>
    </Router>
  );
}

export default App;
