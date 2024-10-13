import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import {
    TextField,
    Button
  } from '@mui/material';

const Split = () => {
  return (
    <div>
    <Button>
        <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Login</Link>
    </Button>
    <div className="h-screen flex">
      {/* Form Section */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gray-100">
        <form className="space-y-4 w-full max-w-md">
          <TextField
            label="YouTube URL"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            label="Time Signature"
            variant="outlined"
            type='number'
            fullWidth
            required
          />
          <TextField
            label="Tempo"
            variant="outlined"
            type='number'
            fullWidth
            required
          />
          <TextField
            label="Max Seconds"
            variant="outlined"
            type='number'
            fullWidth
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth>
            Submit
          </Button>
        </form>
      </div>

      {/* Image Section 
      <div className="flex-1 flex items-center justify-center bg-white">
        <img 
          src="src/assets/piano.jpeg" 
          alt="Description" 
          className="max-h-full w-auto" 
        />
      </div>*/}
      
    </div>
    </div>
  );
};

export default Split;