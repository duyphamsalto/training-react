import React, { useState, useEffect } from "react";
import "./style.scss";
import Pagination from "../../partsComponents/Pagination";
import UserRow from "../../partsComponents/UserRow";
import { API } from "configs/constant";

export default function UsersPage() {
  const token = "19|XwOJ458hxmaWD4NqI0lYMk9zWx2mUx44SGZyKp5K";

  const [users, setUsers] = useState([]);
  const [current, setCurrent] = useState(1);
  const [total, setTotal] = useState(0);
  const [lastPage, setLastPage] = useState(0);

  useEffect(() => {
    async function fetchUserData() {
      const url = `${API.USER.GET}?page=${current}`;
      const res = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const json = await res.json();
      setUsers(json.data);
      setTotal(json.total);
      setLastPage(json.last_page);
    }
    fetchUserData();
  }, [current]);

  function changePage(p) {
    setCurrent(p);
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
            {users.map((user) => {
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
        current={current}
        total={total}
        last={lastPage}
        parentFunction={changePage}
      />
    </>
  );
}
