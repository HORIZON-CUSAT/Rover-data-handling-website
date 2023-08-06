import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Dashboard/Sidebar';
import Home from './pages/Dashboard/Home';
import Mapping from './pages/Dashboard/Mapping';
// Import other page components

function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/mapping' element={<Mapping/>}/>
        {/* Add more Route components for other pages */}
      </Routes>
    </Router>
  );
}

export default App;
