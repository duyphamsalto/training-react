import React from "react";
import { Routes, Route } from "react-router-dom";
import "./style.scss";
import PostPage from "../../pageComponents/PostsPage";
import UsersPage from "../../pageComponents/UsersPage";
import Current from "../../partsComponents/Current";
import NotFind from "../../pageComponents/NotFindPage";
import Dashboard from "../../pageComponents/DashboardPage";

export default function Body() {
  return (
    <div className="Body">
      <Current />
      <Routes>
        <Route path="/" element={<PostPage />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Posts" element={<PostPage />} />
        <Route path="/Users" element={<UsersPage />} />
        <Route path="*" element={<NotFind />} />
      </Routes>
    </div>
  );
}
