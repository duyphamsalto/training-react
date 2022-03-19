import React from "react";
import { Routes, Route } from "react-router-dom";
import "./style.scss";
import PostPage from "../../pageComponents/PostsPage";
import UsersPage from "../../pageComponents/UsersPage";
import Current from "../../partsComponents/Current";
import Pagenation from "../../partsComponents/Pagination";
import NotFind from "../../pageComponents/NotFindPage";

export default function Body() {
  return (
    <div className="Body">
      <Current />
      <Routes>
        <Route path="/" element={<PostPage />} />
        <Route path="/Posts" element={<PostPage />} />
        <Route path="/Users" element={<UsersPage />} />
        <Route path="*" element={<NotFind />} />
      </Routes>
      <Pagenation current={6} />
    </div>
  );
}
