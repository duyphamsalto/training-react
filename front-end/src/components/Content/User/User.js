import React from "react";
import "./style.scss"
import Header from "../../Header/Header";
import Sidebar from "../../Sidebar/Sidebar";
import Body from "../Body";
import Footer from "../../Footer/Footer";
import BreadCrumb from "../Bread-crumb/bread-crumb";
import Pagination from "../Pagination/Pagination";

export default function User () {
  const data = [
    {
      checkbox: false,
      title: "::",
      username: "Textline",
      emali: "Textline",
      status: "Active",
    },
    {
      checkbox: false,
      title: "::",
      username: "Textline",
      emali: "Textline",
      status: "Unactive",
    },
    {
      checkbox: false,
      title: "::",
      username: "Textline",
      emali: "Textline",
      status: "Active",
    },
    {
      checkbox: false,
      title: "::",
      username: "Textline",
      emali: "Textline",
      status: "Textline",
    },
    {
      checkbox: false,
      title: "::",
      username: "Textline",
      emali: "Textline",
      status: "Textline",
    },
    {
      checkbox: false,
      title: "::",
      username: "Textline",
      emali: "Textline",
      status: "Textline",
    },
    {
      checkbox: false,
      title: "::",
      username: "Textline",
      emali: "Textline",
      status: "Textline",
    },
    {
      checkbox: false,
      title: "::",
      username: "Textline",
      emali: "Textline",
      status: "Textline",
    },
    {
      checkbox: false,
      title: "::",
      username: "Textline",
      emali: "Textline",
      status: "Textline",
    },
    {
      checkbox: false,
      title: "::",
      username: "Textline",
      emali: "Textline",
      status: "Textline",
    },
  ];

  return (
    <>
      <Header />
      <div className='container'>
        <Sidebar />
        <div className="right-wrapper">
          <BreadCrumb />
          <div className="wrapper">
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
                  <th>Actions</th>
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
            <Pagination />
            </div>
          <Footer />
        </div>
      </div>
    </>
  );
}