import React, {useState} from 'react'
import {
    TextField,
    Button
} from '@mui/material';
import './Split.css'; // Import the CSS file

const Split = () => {
  return (
    <div className="h-screen flex">
      {/* Form Section */}
      <div className="flex-1 flex items-center justify-center p-8">
        <form className="space-y-4 w-full max-w-md">
          <h1 className="text-4xl font-bold text-center text-white mb-4 poppins-bold">MIDI Note</h1> {/* Example title */}
          
          <TextField
            label="YouTube URL"
            variant="outlined"
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
            className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded font-sans"
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
