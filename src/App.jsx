// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SelectionMenu from './pages/SelectionMenu';


function App() {
    return (
        <Router>
            <Routes>
              
                <Route path="/" element={<Login />} />


                <Route path="/selection-menu" element={<SelectionMenu />} />

            </Routes>
        </Router>
    );
}

export default App;
