import React, {useState} from 'react'
import {
    TextField,
    Button
} from '@mui/material';

import './Split.css'; // Import the CSS file
import { Link } from 'react-router-dom'

import './Split.css';
import { Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

const Split = () => {
    const [url, setUrl ] = useState('');
    const [tempo, setTemp] = useState('');
    const [maxSeconds, setMax] = useState('');
    const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true); 

    // Send the URL to the Flask backend
    const response = await fetch('/snatch', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url, tempo, maxSeconds }),
    });

    setLoading(false);

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
          <h1 className="text-6xl font-bold text-center text-white mb-4 poppins-bold">ScoreSnag</h1>
          <h3 className="text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 poppins-bold">Access music anywhere.</h3>
          <h5 className='text-md font-normal text-center poppins-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Just upload the URL of any MIDI YouTube video to get a PDF version of the sheet music.</h5>
          
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
            value={tempo}
            onChange={(e) => setTemp(e.target.value)}
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
            value={maxSeconds}
            onChange={(e) => setMax(e.target.value)}
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
            className="bg-primary hover:bg-primary text-white font-bold py-2 px-4 rounded font-sans"
            disabled={loading}
          >
                {loading ? <CircularProgress size={24} /> : 'Submit'}

          </Button>
        </form>
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <Typography variant="h6" color="white">Loading...</Typography>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Split;