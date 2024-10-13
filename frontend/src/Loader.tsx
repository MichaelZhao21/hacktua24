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

  // Simulate a loading delay (for example, fetching data)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // After 3 seconds, loading will stop
    }, 3000);
    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

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
