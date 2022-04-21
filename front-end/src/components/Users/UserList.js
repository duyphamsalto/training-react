import React from 'react';
import { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './user.scss';
import { useEffect } from 'react';
import { API } from '../../configs/constant';
import { fetchAsGet } from '../../services/api';
import Progress from '../commons/Progress';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import Box from '@mui/material/Box';

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let current = true;
    setIsLoading(true);
    fetchData(current);

    return () => { current = false; };
  }, []);

  async function fetchData(current) {
    const res = await fetchAsGet(API.USER.GET);
    if (current && res.isOk) {
      setUsers(res.data.data);
      setTotalPage(res.data.total);
    }
    setIsLoading(false);
  }

  return (
    <div>
      {isLoading && <Progress />}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>User Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Status</TableCell>
              <TableCell width={100}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row, idx) =>
              <TableRow
                key={idx}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>Waiting</TableCell>
                <TableCell align="center">
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <DoneIcon color="success"/>
                    <EditIcon color="secondary"/>
                    <DeleteIcon color="error" />
                  </Box>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack spacing={2} direction="row" justifyContent="flex-end">
        <Pagination count={totalPage} />
      </Stack>
    </div>
  );
}
