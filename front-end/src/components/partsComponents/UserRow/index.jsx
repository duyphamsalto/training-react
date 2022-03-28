import React from "react";
import "./style.scss";
import icon from "asset/row-icon.png";
import { Link } from "react-router-dom";

export default function UserRow(props) {
  return (
    <>
      <tr>
        <td>
          <input type="checkbox" name="" id="" />
        </td>
        <td>
          <img src={icon} alt="" />
        </td>
        <td>{props.name}</td>
        <td>{props.email}</td>
        <td>{props.status ? "Active" : "Un active"}</td>
        <td>
          <Link to={`/user_${props.id}/publich`}>Publich</Link>
          <Link to={`/user_${props.id}/edit`}>Edit</Link>
          <Link to={`/user_${props.id}/delete`}>Delete</Link>
        </td>
      </tr>
    </>
  );
}
