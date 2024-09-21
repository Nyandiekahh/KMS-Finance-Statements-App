import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginSignupPage from './components/LoginSignupPage';
import ProtectedPage from './components/ProtectedPage'; // A protected component

const isAuthenticated = () => {
  return localStorage.getItem('token') !== null;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignupPage />} />
        <Route path="/protected" element={isAuthenticated() ? <ProtectedPage /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
