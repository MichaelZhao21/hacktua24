import React, { useState, useEffect } from 'react';
import './Split.css'; // Import the CSS for the loader

// Loader Component
const Loader = () => {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
    </div>
  );
};

// Main Component
export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {loading ? (
        <Loader /> // Show loader while loading
      ) : (
        <div>
          <h1>Your Content is Loaded!</h1>
          <p>This is the main content of your page.</p>
        </div>
      )}
    </div>
  );
}
