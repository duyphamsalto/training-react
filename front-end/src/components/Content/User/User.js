import React, {useState, useEffect} from "react";
import { API } from '../../../configs/constant';
import Pagination from '../Pagination/Pagination';
import "./style.scss";

export default function User() {
    const [data, setData] = useState([]);
    const [page] = useState(1);
    const token = '10|wgcLSkQmGweHRgFoPgK51swtTsxS1w2uvxFj2pMj';

    useEffect(() => {
        async function fetchData() {
            const url = API.USER.GET;
            const res = await fetch(url, {
                method: 'GET' ,
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Accept": "application/json", "Content-Type": "application/json"
                }});

            const users = await res.json();
            setData(users.data);
        }

        fetchData();

    }, [page]);

    //watch => view component, check
    function onPageChange(page) {
        console.log(page);
        // setPage(page);
    }

    return(
        <>
        <table>

            <tbody>

                {/* {data.map((item, index => 
                    <tr key={index}>
                        <td className="firstArea">
                            <input type={checkbox} name="scales" />
                        </td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.email_verified_at}</td>
                        <td>
                            <a href="#">Publish</a>
                            <a href="#">Edit</a>
                            <a href="#">Delete</a>
                        </td>
                    </tr>
                ))} */}

            </tbody>

        </table>
        <Pagination page={page} onPageChange={onPageChange} />
        </>
    );
}