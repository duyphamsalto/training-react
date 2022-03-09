import React from 'react';
import './style.scss';

export default function Users() {

  const userData = [
    {
      'title' : 'title',
      'userName' : 'Text line',
      'email' : 'test.abc@salto.link',
      'status' : 'Active'
    }, {
      'title' : 'title',
      'userName' : 'Text line',
      'email' : 'test.abc@salto.link',
      'status' : 'Un active'
    }, {
      'title' : 'title',
      'userName' : 'Text line',
      'email' : 'test.abc@salto.link',
      'status' : 'Active'
    }, {
      'title' : 'title',
      'userName' : 'Text line',
      'email' : 'test.abc@salto.link',
      'status' : 'Active'
    }, {
      'title' : 'title',
      'userName' : 'Text line',
      'email' : 'test.abc@salto.link',
      'status' : 'Active'
    }, {
      'title' : 'title',
      'userName' : 'Text line',
      'email' : 'test.abc@salto.link',
      'status' : 'Active'
    }, {
      'title' : 'title',
      'userName' : 'Text line',
      'email' : 'test.abc@salto.link',
      'status' : 'Active'
    }, {
      'title' : 'title',
      'userName' : 'Text line',
      'email' : 'test.abc@salto.link',
      'status' : 'Active'
    }, {
      'title' : 'title',
      'userName' : 'Text line',
      'email' : 'test.abc@salto.link',
      'status' : 'Active'
    }, {
      'title' : 'title',
      'userName' : 'Text line',
      'email' : 'test.abc@salto.link',
      'status' : 'Active'
    }
  ]

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
        {userData.map((ud) => (
          <tr>
            <td><input type='checkbox' /></td>
            <td>{ud.title}</td>
            <td>{ud.userName}</td>
            <td>{ud.email}</td>
            <td>{ud.status}</td>
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