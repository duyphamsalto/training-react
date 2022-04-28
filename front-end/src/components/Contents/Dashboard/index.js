import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './index.scss';

export default function Dashboard() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div id='dashboard'>
      <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
        <Button variant="contained" color="success" onClick={() => dispatch(increment())}>Increment value</Button>
        <span>{count}</span>
        <Button variant="contained" color="success" onClick={() => dispatch(decrement())}>Decrement value</Button>
      </Stack>
      <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
        <Button variant="outlined" color="error">
          Error
        </Button>
      </Stack>
    </div>
  );
}