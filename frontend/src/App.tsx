import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Button } from '@mui/material';
import Split from './Split';
import Login from './Login';

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Split />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;