import React, { useState, useEffect } from "react";
import "./style.scss";
import Pagination from "../../partsComponents/Pagination";
import UserRow from "../../partsComponents/UserRow";
import { fetchUserData } from "API/function";

export default function UsersPage() {
  const [pageData, setPageData] = useState({
    users: [],
    current: 1,
    total: 0,
    lastPage: 0,
  });

  useEffect(() => {
    fetchUserData(pageData, setPageData);
  }, [pageData.current]);

  function changePage(p) {
    setPageData({ ...pageData, current: p });
  }

  return (
    <>
      <div className="UsersPage">
        <table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" disabled />
              </th>
              <th>Title</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {pageData.users.map((user) => {
              return (
                <UserRow
                  key={user.id}
                  id={user.id}
                  name={user.name}
                  email={user.email}
                  status={user.status}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      <Pagination
        current={pageData.current}
        total={pageData.total}
        last={pageData.lastPage}
        parentFunction={changePage}
      />
    </>
  );
}
