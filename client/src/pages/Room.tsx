import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { RoomContext } from "../context/RoomContext";

export const Room = () => {
  const { roomId } = useParams<{ roomId: string }>();
  const { ws, me } = React.useContext(RoomContext);
  useEffect(() => {
    if (me) ws.emit("join-room", { roomId: roomId, peerId: me._id });
  }, [roomId]);

  return <div>Room Id: {roomId}</div>;
};
