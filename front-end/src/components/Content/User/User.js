// import React from "react";
import "./style.scss";
import { API } from "../../../config/constant";
import Pagination from "../../Content/Pagination/Pagination";
import React, { useState, useEffect } from "react";

export default function User() {
  const [data, setData] = useState([]);
  const [page] = useState(1);
  const token = "10|wgcLSkQmGweHRgFoPgK51swtTsxS1w2uvxFj2pMj";

  useEffect(() => {
    async function fetchData() {
      const url = API.USER.GET;
      const res = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const users = await res.json();
      console.log(users);
      // setData(users.data);
    }

    fetchData();
  }, [page]);

  function onPageChange(page) {
    console.log(page);
  }

  return (
    <>
      <table>
        <tbody>
          <tr>
            <th class="checkbox-Area">
              <input type="checkbox" name="scales" />
            </th>
            <th class="title_Area">Title</th>
            <th class="username_Area">UserName</th>
            <th class="email_Area">Email</th>
            <th class="status_Area">Status</th>
            <th>Title</th>
          </tr>
          {data.map((item) => {
            return (
              <tr>
                <td class="first_Area">
                  <input
                    type="checkbox"
                    checked={item.checkbox}
                    name="scales"
                  />
                </td>
                <td>{item.title}</td>
                <td>{item.username}</td>
                <td>{item.emali}</td>
                <td>{item.status}</td>
                <td>
                  <a href="#">Publish</a>
                  <a href="#">Edit</a>
                  <a href="#">Delete</a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination page={page} onPageChange={onPageChange} />
    </>
  );

  // const data = [
  //   {
  //     checkbox: false,
  //     title: "::",
  //     username: "Textline",
  //     emali: "Textline",
  //     status: "true",
  //   },
  //   {
  //     checkbox: false,
  //     title: "::",
  //     username: "Textline",
  //     emali: "Textline",
  //     status: "true",
  //   },
  //   {
  //     checkbox: false,
  //     title: "::",
  //     username: "Textline",
  //     emali: "Textline",
  //     status: "true",
  //   },
  //   {
  //     checkbox: false,
  //     title: "::",
  //     username: "Textline",
  //     emali: "Textline",
  //     status: "true",
  //   },
  //   {
  //     checkbox: false,
  //     title: "::",
  //     username: "Textline",
  //     emali: "Textline",
  //     status: "true",
  //   },
  // // ];
}
