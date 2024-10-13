import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components
import Split from './Split';
import Login from './Login';
import Dashboard from './Dashboard';
import Result from './Result';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Split />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}/>
          {/*<Route path="/result" element={<Result xmlPath={"http://localhost:5000/xml"} />} />*/}

        </Routes>
      </Router>
    </div>
  );
}

export default App;