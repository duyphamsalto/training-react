import React, { useEffect } from 'react';
import PostList from '../../components/Posts/PostList';

export default function PostListPage() {
  useEffect(() => {
    document.title = "Post page";
  })

  return (
    <PostList />
  )
}
