import './Users.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { API } from '../../configs/constant';
// import Pagination from './paginate';
import ReactPaginate from 'react-paginate';


export default function Users() {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const token = localStorage.getItem("token");
    const APP_ENV = process.env;
    const EMAIL = APP_ENV.EMAIL;
    const PASS = APP_ENV.PASS
    const [data, setData] = useState();



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
            // console.log(user.last_page);
            console.log(user.total);
            // console.log(user.current_page);
            setUsers(user.data);
            setData(user);
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
                <nav aria-label="Page navigation comments" className="mt-4">
                    <ReactPaginate
                        // pageCount={Math.ceil(data.total / 15)} //総ページ数。今回は一覧表示したいデータ数 / 1ページあたりの表示数としてます。
                        pageCount={68} //総ページ数。今回は一覧表示したいデータ数 / 1ページあたりの表示数としてます。
                        marginPagesDisplayed={2} //先頭と末尾に表示するページの数。今回は2としたので1,2…今いるページの前後…後ろから2番目, 1番目 のように表示されます。
                        pageRangeDisplayed={5} //上記の「今いるページの前後」の番号をいくつ表示させるかを決めます。
                        onPageChange={onPageChange} //ページネーションのリンクをクリックしたときのイベント(詳しくは下で解説します)
                        // containerClassName='pagination' //ページネーションリンクの親要素のクラス名
                        // pageClassName='page-item' //各子要素(li要素)のクラス名
                        // pageLinkClassName='page-link' //ページネーションのリンクのクラス名
                        // activeClassName='active' //今いるページ番号のクラス名。今いるページの番号だけ太字にしたりできます 
                        previousLabel='<' //前のページ番号に戻すリンクのテキスト
                        nextLabel='>' //次のページに進むボタンのテキスト
                        // previousClassName='page-item' // '<'の親要素(li)のクラス名
                        // nextClassName='page-item' //'>'の親要素(li)のクラス名
                        // previousLinkClassName='page-link'  //'<'のリンクのクラス名
                        // nextLinkClassName='page-link' //'>'のリンクのクラス名
                        disabledClassName='disabled' //先頭 or 末尾に行ったときにそれ以上戻れ(進め)なくするためのクラス
                        breakLabel='...' // ページがたくさんあるときに表示しない番号に当たる部分をどう表示するか
                        // breakClassName='page-item' // 上記の「…」のクラス名
                        // breakLinkClassName='page-link' // 「…」の中のリンクにつけるクラス
                    />
                </nav>
            </div>
        </>
    );

}

