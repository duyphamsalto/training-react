import React from "react";
import "./style.scss";
import icon from "asset/row-icon.png";

function is_status(bool) {
  if (bool) return "Active";
  else return "Un active";
}

const UserRow = (props) => {
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
        <td>{is_status(props.status)}</td>
        <td>
          <a href={`/id_${props.id}/publich`}>Publich</a>
          <a href={`/id_${props.id}/edit`}>Edit</a>
          <a href={`/id_${props.id}/delete`}>Delete</a>
        </td>
      </tr>
    </>
  );
};
export default UserRow;
