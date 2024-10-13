import React from 'react'
import {
    TextField,
    Button,
    Typography,
    Paper,
  } from '@mui/material';

const Split = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-1 p-8 bg-gray-100 flex items-center justify-center">
        <Paper elevation={3} className="p-4 w-full max-w-md">
          <Typography variant="h5" component="h2" className="mb-4">
            Your Form
          </Typography>
          <form className="space-y-4">
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              fullWidth
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Submit
            </Button>
          </form>
        </Paper>
      </div>
      <div className="flex-1 flex items-center justify-center bg-white">
        <img src="your-image-url.jpg" alt="Description" className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default Split;