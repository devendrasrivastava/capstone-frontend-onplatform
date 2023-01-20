import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';

export default function FloatingActionButtonExtendedSize() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab variant="extended" size="small" color="primary" aria-label="add" sx={{backgroundColor:'#42145F'}}>
        <NavigationIcon sx={{ mr: 1 }} />
        We champion potential
      </Fab>
      <Fab variant="extended" size="medium" color="primary" aria-label="add" sx={{backgroundColor:'#42145F'}}>
        <NavigationIcon sx={{ mr: 1 }} />
        helping people
      </Fab>
      <Fab variant="extended" color="primary" aria-label="add" sx={{backgroundColor:'#42145F'}}>
        <NavigationIcon sx={{ mr: 1 }} />
        families and businesses to thrive.
      </Fab>
    </Box>
  );
}