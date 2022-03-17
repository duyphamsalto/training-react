import React, { useEffect } from 'react';
import UserList from '../../components/Users/UserList';

export default function UserListPage() {
  useEffect(() => {
    document.title = "User page";
  })

  return (
    <UserList />
  )
}
