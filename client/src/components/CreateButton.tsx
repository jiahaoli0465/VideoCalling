import React from "react";
import { RoomContext } from "../context/RoomContext";
import { join } from "path";

export const CreateButton = () => {
  const { ws } = React.useContext(RoomContext);
  const createRoom = () => {
    ws.emit("create-room");
  };
  return (
    <button
      onClick={createRoom}
      className="bg-rose-400 py-2 px-8 rounded-lg text-xl hover:bg-rose-600 text-white"
    >
      Start New Meeting
    </button>
  );
};
