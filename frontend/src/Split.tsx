import React, {useState} from 'react'
import {
    TextField,
    Button
} from '@mui/material';
import './Split.css';

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
    <div className="h-screen flex split-background">
      {/* Form Section */}
      <div className="flex-1 flex items-center justify-center p-8">

        <form className="space-y-4 w-full max-w-md">
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
          <TextField
            label="Time Signature"
            variant="outlined"
            type='number'
            fullWidth
            required
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
            label="Tempo"
            variant="outlined"
            type='number'
            fullWidth
            required
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
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className="bg-primary hover:bg-primary text-white font-bold py-2 px-4 rounded font-sans"
          >
            Submit
          </Button>
        </form>
      </div>
      {/* Image Section */}
      {/* Uncomment and add your image here if needed */}
    </div>
  );
};

export default Split;