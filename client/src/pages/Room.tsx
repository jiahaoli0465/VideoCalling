import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { RoomContext } from "../context/RoomContext";

export const Room = () => {
  const { roomId } = useParams<{ roomId: string }>();
  const { ws } = React.useContext(RoomContext);
  useEffect(() => {
    ws.emit("join-room", { roomId: roomId });
  }, [roomId]);

  return <div>Room Id: {roomId}</div>;
};
