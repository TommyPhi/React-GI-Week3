import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import './App.css';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Router>
      <nav>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </nav>
      </Router>
    </div>
  );
}

export default App;
