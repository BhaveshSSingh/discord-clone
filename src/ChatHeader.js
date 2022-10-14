import React from "react";
import "./ChatHeader.css";
import { IoIosNotifications } from "react-icons/io";
import { BiMessageRoundedCheck, BiSearchAlt } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { IoHelpCircleSharp } from "react-icons/io5";

export default function ChatHeader({ channelName }) {
  return (
    <div className="chatHeader">
      <div className="chatHeader__left">
        <h3>
          <span className="chatHeader__hash">#</span>
          {channelName}
        </h3>
      </div>
      <div className="chatHeader__right">
        <IoIosNotifications className="icon" />
        <BiMessageRoundedCheck className="icon" />
        <BsFillPeopleFill className="icon" />
        <div className="chatHeader__search">
          <input type="text" placeholder="Search" />
          <BiSearchAlt />
        </div>
        <FiSend />
        <IoHelpCircleSharp />
      </div>
    </div>
  );
}
