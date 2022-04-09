import './Users.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { API } from '../../configs/constant';
import { fetchAsGet } from '../../services/api';


export default function Users() {
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


    const columns = (
        users.map((item, idx) =>
        <tr key={idx}>
            <td className="check">{item.id}</td>
            <td className="name">{item.name}</td>
            <td className="email">{item.email}</td>
            <td className="status">Waiting</td>
            <td className="action-data">
                <button type="button" className="btn btn-outline-success btn-sm mx-2">Publish</button>
                <button type="button" className="btn btn-outline-info btn-sm mx-2">Edit</button>
                <button type="button" className="btn btn-outline-danger btn-sm mx-2">Delete</button>
            </td>
        </tr>
    ));

    return (
        <div className="back">
            <table>
                <thead>
                    <tr className="table-head">
                        <th className="check">#</th>
                        <th className="title">User Name</th>
                        <th className="email-header">Email</th>
                        <th className="status-header">Status</th>
                        <th className="action-header">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {columns}
                </tbody>
            </table>
        </div>
    );

}

