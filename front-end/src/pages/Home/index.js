import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from 'features/counter/counterSlice';
import { toggleIcon } from 'features/users/userSlice';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

export default function Home() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    document.title = "React training";
  });
  console.log('%c RENDER Home Component', 'color: orange; font-size: 20px');
  return (
    <Box>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={2}>
          <Button variant="contained" endIcon={<RemoveCircleIcon />} onClick={() => dispatch(decrement())}>
            Decrement
          </Button>
        </Grid>
        <Grid item xs={2} display="flex" justifyContent="center">
          <Chip label={`Count: ${count}`} color="secondary" size="medium" />
        </Grid>
        <Grid item xs={2}>
          <Button variant="outlined" startIcon={<AddCircleIcon />} onClick={() => dispatch(increment())}>
            Increment
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2} columns={16} sx={{ mt: 3 }}>
        <Grid item xs={3}>
          <Button variant="outlined" startIcon={<AddCircleIcon />} onClick={() => dispatch(toggleIcon())}>
            {user.isShowIcon ? 'Hide Icon' : 'Show Icon'}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
