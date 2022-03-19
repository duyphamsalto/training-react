import React from "react";
import "./style.scss";
import PostPage from "./PostsPage/PostPage";
import UsersPage from "./UsersPage/UsersPage";
import Current from "./Current/Current";
import Pagenation from "./Pagination/Pagenation";

export default function Body() {
  return (
    <div className="Body">
      <Current />
      <PostPage />
      <UsersPage />
      <Pagenation current={6} />
    </div>
  );
}
