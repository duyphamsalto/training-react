import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import User from "./components/Content/User/User";

export default function RouterConfig() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path="/users" element={<User />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}