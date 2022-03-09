import React from 'react';
import { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Skeleton from "@mui/material/Skeleton";
import './post.scss';
import PostCard from './PostCard';

export default function PostList() {
  const [isLoading, setLoading] = useState(true);

  const [data] = useState(Array(12).fill({
    name: 'Shrimp and Chorizo Paella',
    desc: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'
  }));

  function processLoading() {
    return Array.from(new Array(12)).map((item, index) => (
      <div className='col-3 mb-5' key={index}>
        <Skeleton variant="rectangular" height={150} />
        <div className='pt-3'>
          <Skeleton />
          <Skeleton width="60%" />
        </div>
      </div>
    ));
  }

  return (
    <div className='post-list'>
      <div className='row'>
        {isLoading ? processLoading() : data.map((item, idx) => <PostCard {...item} key={idx} />)}
      </div>
      <Stack spacing={2} direction="row" justifyContent="flex-end">
        {isLoading ? <Skeleton variant="text" width={200} /> : <Pagination count={10} />}
      </Stack>
    </div>
  );
}
