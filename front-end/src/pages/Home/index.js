import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from 'features/counter/counterSlice';
import { toggleIcon } from 'features/users/userSlice';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import ReactMemo from 'components/ReactMemo';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function Home() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const user = useSelector((state) => state.user);
  const [data] = useState({
    info: "React v18.0",
    desc: "React 18 is now available on npm!",
    count: 0
  });

  useEffect(() => {
    document.title = "React training";

    const interval = setInterval(() => {
      dispatch(increment());
    }, 1000);

    return () => clearInterval(interval);
  });

  function handleChangeText() {
    // setData(state => ({...state, count: state.count + 1}))
    dispatch(decrement());
  }

  return (
    <>
      <Accordion expanded={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Redux</Typography>
        </AccordionSummary>
        <AccordionDetails>
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
            <Grid container spacing={2} marginTop={3} columns={16} sx={{ mt: 3 }}>
              <Grid item xs={3}>
                <Button variant="outlined" startIcon={<AddCircleIcon />} onClick={handleChangeText}>
                  Change text
                </Button>
              </Grid>
            </Grid>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>React Memo</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Grid container spacing={2} marginTop={3} columns={16} sx={{ mt: 3 }}>
              <Grid item xs={12}>
                <Button variant="outlined" startIcon={<AddCircleIcon />} onClick={handleChangeText}>
                  Change text
                </Button>
              </Grid>
            </Grid>

            <ReactMemo {...data} />
            <Grid item xs={2} marginTop={2} display="flex" justifyContent="center">
              <Chip label={`Count: ${count}`} color="secondary" size="medium" />
            </Grid>
          </Box>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
