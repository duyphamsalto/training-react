import React, { useState, useEffect } from 'react';

import { API } from '../../configs/constant.js';
import './style.scss';

export default function Users() {
  const [data, setData] = useState([]);
  const token = "21|vpkaXAFUcNm6jDdIKeuP4BvWLTKReNmw1gMzAl71";

  useEffect(() => {
    async function fetchUsersData(){
      const url = API.USER.GET;
      const result = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          "Accept": "application/json",
          "Content-type": "application/json"
        }
      });
      const users = await result.json();
      setData(users.data);
    }
    fetchUsersData();
  }, []);

  return (
    <div id='users' className=''>
      <table>
        <tr>
          <th><input type='checkbox' /></th>
          <th>Title</th>
          <th>User Name</th>
          <th>Email</th>
          <th>Status</th>
          <th>button</th>
        </tr>
        {data.map((m) => (
          <tr key={m.id}>
            <td><input type='checkbox' /></td>
            <td>{m.id}</td>
            <td>{m.name}</td>
            <td>{m.email}</td>
            <td>{m.updated_at}</td>
            <td>
              <input type='button' value='Piblish' />
              <input type='button' value='Edit' />
              <input type='button' value='Delete' />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}