import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

function GeneratedMusic3() {
  const theme = useTheme();

  return (
    <div>
      <Card sx={{ 
            display: 'flex',
            fontFamily: 'Poppins', 
            fontSize: '20px', 
            fontWeight: 'bold',
       }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ 
                flex: '1 0 auto',
                fontFamily: 'Poppins', 
                fontSize: '20px', 
                fontWeight: 'bold',
            }}>
            <InsertDriveFileIcon />
            <Typography component="div" variant="h5">
              Live From Space
            </Typography>
            <Typography variant="subtitle1" component="div" sx={{ color: 'text.secondary' }}>
              Mac Miller
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </div>
  );
}

export default GeneratedMusic3;
