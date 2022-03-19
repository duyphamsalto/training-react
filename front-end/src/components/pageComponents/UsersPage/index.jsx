import React, { useEffect } from "react";
import "./style.scss";
import UserRow from "../../partsComponents/UserRow";

// useEffect(() => {
//   getData();
// }, []);
const datas = [
  { id: 1, name: "Text line", email: "Text line", status: true },
  { id: 2, name: "Text line", email: "Text line", status: false },
  { id: 3, name: "Text line", email: "Text line", status: false },
  { id: 4, name: "Text line", email: "Text line", status: true },
  { id: 5, name: "Text line", email: "Text line", status: true },
];

export default function UsersPage() {
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
            {datas.map((data) => {
              return (
                <UserRow
                  key={data.id}
                  name={data.name}
                  email={data.email}
                  status={data.status}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
