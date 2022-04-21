import React from 'react';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

export default React.memo(function Index(props) {
  const {info, desc} = props;
  console.log('Rendering memo component');
  
  return (
    <Box>
      <Grid container spacing={2} marginTop={3} columns={16}>
        <Grid item xs={5} display="flex" justifyContent="center">
          <Chip label={info} color="secondary" size="medium" />
          <Chip label={desc} color="secondary" size="medium" />
        </Grid>
      </Grid>
    </Box>
  )
});
