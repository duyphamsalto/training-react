import React from "react";
import "./App.scss";
// import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Layout from "components/layoutComponents/layout";
import Login from "components/layoutComponents/Login";
import NotFind from "components/pageComponents/NotFindPage";
import PostPage from "components/pageComponents/PostsPage";
import UsersPage from "components/pageComponents/UsersPage";
import Dashboard from "components/pageComponents/DashboardPage";

function Categories() {
  return (
    <>
      <h2>Categories page</h2>
    </>
  );
}

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Posts" element={<PostPage />} />
          <Route path="/Users" element={<UsersPage />} />
          <Route path="/Categories" element={<Categories />} />
        </Route>
        <Route path="/*" element={<NotFind />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
