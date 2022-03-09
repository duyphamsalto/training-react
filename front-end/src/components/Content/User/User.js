import React from "react";
import "./style.scss";

export default function User() {
  const data = [
    {
      checkbox: false,
      title: "::",
      username: "Textline",
      emali: "Textline",
      status: "true",
    },
    {
      checkbox: false,
      title: "::",
      username: "Textline",
      emali: "Textline",
      status: "true",
    },
    {
      checkbox: false,
      title: "::",
      username: "Textline",
      emali: "Textline",
      status: "true",
    },
    {
      checkbox: false,
      title: "::",
      username: "Textline",
      emali: "Textline",
      status: "true",
    },
    {
      checkbox: false,
      title: "::",
      username: "Textline",
      emali: "Textline",
      status: "true",
    },
  ];

  return (
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
                <input type="checkbox" checked={item.checkbox} name="scales" />
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
  );
}
