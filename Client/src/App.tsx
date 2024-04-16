import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TabsNav } from './components/TabsNav/TabsNav';
import './App.css';

function App() {
  return (
    <Router>
      <TabsNav/>
      <Routes>
        <Route path="/"/>
      </Routes>
    </Router>
  );
}

export default App;
