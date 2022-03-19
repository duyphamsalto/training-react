import React from "react";
import "./style.scss";
import PostPage from "../../pageComponents/PostsPage";
import UsersPage from "../../pageComponents/UsersPage";
import Current from "../../partsComponents/Current";
import Pagenation from "../../partsComponents/Pagination";

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
