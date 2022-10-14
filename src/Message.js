import React from "react";
import "./Message.css";
import Delete from "@material-ui/icons/Delete";
import { Avatar } from "@material-ui/core";
export default function Message({ timestamp, user, message }) {
  function handleDelete() {
    // figure out how to delete
  }

  return (
    <div className="message">
      <Avatar src={user.photo} />
      <div className="message__info">
        <h4>
          {user.displayName}{" "}
          <span className="message__timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
          <Delete onClick={handleDelete} className="Delete" fontSize="small" />
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}
