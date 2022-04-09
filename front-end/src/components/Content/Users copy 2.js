import './Users.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { API } from '../../configs/constant';
import PaginatedItems from './paginate';
import Pagination from './paginate';


export default function Users() {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const token = localStorage.getItem("token");
    const APP_ENV = process.env;

    const EMAIL = APP_ENV.EMAIL;
    const PASS = APP_ENV.PASS

    async function login() {
        const result = fetch(API.USER.LOGIN, {
            method: 'POST',
            headers: { "Accept": "application/json", "Content-Type": "application/json" },
            body: JSON.stringify({EMAIL, PASS})
        });
        if (result.isOk) {
            localStorage.setItem("token", result.data.token);
        }
    }

    useEffect(() => {
        async function fetchData(){
            const url = API.USER.GET;

            if( !token ){
                login();
            }
            const res = await fetch(`${url}?page=${page}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Accept": "application/json", "Content-Type": "application/json"
                }
            });
            const users = await res.json();
            console.log(users);
            setUsers(users.data);
        }

        fetchData();
    }, [page]);
  
    function onPageChange(page) {
        setPage(page);
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
            <Pagination page={page} onChange={onPageChange} />
        </div>
    );

}

