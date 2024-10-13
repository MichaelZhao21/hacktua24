import React, {useState} from 'react'
import {
    TextField,
    Button
} from '@mui/material';
import './Split.css'; // Import the CSS file
import { Link } from 'react-router-dom'

const Split = () => {
    const [url, setUrl] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Send the URL to the Flask backend
    const response = await fetch('/snatch', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data); // Handle the response as needed
    } else {
      console.error('Error:', response.statusText);
    }
  };

  return (
    <div>
    <Button>
        <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Login</Link>
    </Button>
    <div className="h-screen flex split-background">
      {/* Form Section */}
      <div className="flex-1 flex items-center justify-center p-8">
        <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
          <h1 className="text-4xl font-bold text-center text-white mb-4 poppins-bold">MIDI Note</h1> {/* Example title */}
          <TextField
            label="YouTube URL"
            variant="outlined"
            fullWidth
            required
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            sx={{
              '& label': { 
                  color: 'white',
                  fontFamily: 'Poppins, sans-serif', // Use the correct font family
              },
              '& .MuiOutlinedInput-root': {
                '& input': { 
                  color: 'white', // Text color
                  fontFamily: 'Poppins, sans-serif', // Apply font family here
                },
                '& fieldset': { borderColor: 'white' }, // Style for border
              },
              '&:hover fieldset': { borderColor: 'white' }, // Border color on hover
              '&.Mui-focused fieldset': { borderColor: 'white' }, // Border color when focused
            }}
          />
          <div className="flex space-x-2">
          <TextField
            label="Tempo"
            variant="outlined"
            type='number'
            fullWidth
            required
            size="small"
            sx={{
              '& label': { 
                  color: 'white',
                  fontFamily: 'Poppins, sans-serif', // Use the correct font family
              },
              '& .MuiOutlinedInput-root': {
                '& input': { 
                  color: 'white', // Text color
                  fontFamily: 'Poppins, sans-serif', // Apply font family here
                },
                '& fieldset': { borderColor: 'white' }, // Style for border
              },
              '&:hover fieldset': { borderColor: 'white' }, // Border color on hover
              '&.Mui-focused fieldset': { borderColor: 'white' }, // Border color when focused
            }}
          />
          
          <TextField
            label="Max Seconds"
            variant="outlined"
            type='number'
            fullWidth
            required
            size="small"
            sx={{
              '& label': { 
                  color: 'white',
                  fontFamily: 'Poppins, sans-serif', // Use the correct font family
              },
              '& .MuiOutlinedInput-root': {
                '& input': { 
                  color: 'white', // Text color
                  fontFamily: 'Poppins, sans-serif', // Apply font family here
                },
                '& fieldset': { borderColor: 'white' }, // Style for border
              },
              '&:hover fieldset': { borderColor: 'white' }, // Border color on hover
              '&.Mui-focused fieldset': { borderColor: 'white' }, // Border color when focused
            }}
          />
          </div>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded font-sans"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Split;