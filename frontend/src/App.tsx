import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components
import Split from './Split';
import Login from './Login';
import Result from './Result';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Split />} />
          <Route path="/login" element={<Login />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;