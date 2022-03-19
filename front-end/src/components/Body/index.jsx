import React from "react";
import "./style.scss";
import PostPage from "./PostsPage";
import UsersPage from "./UsersPage";
import Current from "./Current";
import Pagenation from "./Pagination";

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
