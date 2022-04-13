import './Users.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { API } from '../../configs/constant';
import Pagination from '@mui/material/Pagination';


export default function Users() {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState();
    const token = localStorage.getItem("token");
    const APP_ENV = process.env;
    const EMAIL = APP_ENV.EMAIL;
    const PASS = APP_ENV.PASS



    async function login() {
        const result = fetch(API.USER.LOGIN, {
            method: 'POST',
            headers: { "Accept": "application/json", "Content-Type": "application/json" },
            body: JSON.stringify({ EMAIL, PASS })
        });
        if (result.isOk) {
            localStorage.setItem("token", result.data.token);
        }
    }

    useEffect(() => {
        async function fetchData() {
            const url = API.USER.GET;

            if (!token) {
                login();
            }
            const res = await fetch(`${url}?page=${page}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Accept": "application/json", "Content-Type": "application/json"
                }
            });
            const user = await res.json();
            console.log(user.last_page);
            console.log(user);
            setUsers(user.data);
            setTotalPage(user.last_page)
            setPage(user.current_page)
        }

        fetchData();
    }, [page]);


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
        <>
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
                <Pagination count={totalPage} boundaryCount={2} page={page}  onChange={(e, page) =>setPage(page)} />
            </div>
        </>
    );

}

