import React from "react";
import { useDispatch } from "react-redux";
import { setChanneInfo } from "./features/appSlice";
import "./SidebarChannel.css";
import Delete from "@material-ui/icons/Delete";

export default function SidebarChannel({ id, channelName }) {
  const dispatch = useDispatch();

  return (
    <div
      className="sidebarChannel"
      onClick={() =>
        dispatch(
          setChanneInfo({
            channelId: id,
            channelName: channelName,
          })
        )
      }
    >
      <h4>
        <Delete />

        <span className="sidebarChannel__hash">#</span>
        {channelName}
      </h4>
    </div>
  );
}
