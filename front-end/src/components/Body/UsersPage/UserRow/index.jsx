import React from "react";
import "./style.scss";
import icon from "asset/row-icon.png";

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
          <a href={`/id_${props.id}/publich`}>Publich</a>
          <a href={`/id_${props.id}/edit`}>Edit</a>
          <a href={`/id_${props.id}/delete`}>Delete</a>
        </td>
      </tr>
    </>
  );
}
