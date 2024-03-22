import { Socket } from "socket.io";
import { v4 as uuidv4 } from "uuid";

const rooms: Record<string, string[]> = {};

export const roomHandler = (socket: Socket) => {
  const createRoom = () => {
    const roomId = uuidv4();
    rooms[roomId] = [];
    socket.emit("room-created", { roomId });
    console.log("user created room");
  };

  const joinRoom = ({ roomId }: { roomId: string }) => {
    console.log("user joined room", roomId);
    socket.join(roomId);
  };

  socket.on("create-room", createRoom);

  socket.on("join-room", joinRoom);
};
