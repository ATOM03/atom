import React from "react";
import "./Message.css";

const Message = ({ message: { user, text }, name }) => {
  let today = new Date();
  let isSentByCurrentUser = false;
  const trimmendNam = name.trim().toLowerCase();
  if (user === trimmendNam) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <p className="sentText pr-10">{trimmendNam}</p>
      <div className="messageBox backgroundBlue">
        <p className="messageText colorWhite">
          {text}
          <span className="time">
            {"  "}
            {today.getHours() + ":" + today.getMinutes()}
          </span>
        </p>
        <p></p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageBox backgroundLight">
        <p className="messageText coloDark">
          {text}
          <span className="time">
            {"  "}
            {today.getHours() + ":" + today.getMinutes()}
          </span>
        </p>
      </div>
      <p className="sentText pl-10">{user}</p>
    </div>
  );
};

export default Message;
