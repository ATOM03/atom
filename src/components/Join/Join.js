import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./join.css";
const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return (
    <div className="outerContainerJoin">
      <div className="innerContainer">
        <h2>Welcome to Chatty-App</h2>
        <input
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
        ></input>
        <input
          placeholder="Room"
          onChange={(event) => setRoom(event.target.value)}
        ></input>
        <Link
          className="Link"
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button type="submit">Enter</button>
        </Link>{" "}
      </div>
    </div>
  );
};
export default Join;
