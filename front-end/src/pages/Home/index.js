import React from 'react';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.title = "React training";
  })
  
  return (
    <h1>Home Page</h1>
  )
}
