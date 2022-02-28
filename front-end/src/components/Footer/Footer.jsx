import React from "react";
import "./style.scss";

export default function Footer() {
  return (
    <footer>
      <ul className="left">
        <li>Privacy Policy</li>
        <li>Terms of Use</li>
      </ul>
      <ul className="right">
        <li>
          © 2022 Admin UI, Made with ❤ by <span>DUY PHAM Design.</span>
        </li>
      </ul>
    </footer>
  );
}
