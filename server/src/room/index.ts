import { Socket } from "socket.io";
import { v4 as uuidv4 } from "uuid";

const rooms: Record<string, string[]> = {};

interface IRoomParams {
  roomId: string;
  peerId: string;
}

export const roomHandler = (socket: Socket) => {
  const createRoom = () => {
    const roomId = uuidv4();
    rooms[roomId] = [];
    socket.emit("room-created", { roomId });
    console.log("user created room");
  };

  const joinRoom = ({ roomId, peerId }: IRoomParams) => {
    if (rooms[roomId]) {
      if (rooms[roomId].includes(peerId)) {
        console.log("user already in room", roomId, peerId);
        socket.emit("get-users", {
          roomId,
          participants: rooms[roomId],
        });
        return;
      }

      console.log("user joined room", roomId, peerId);

      rooms[roomId].push(peerId);

      socket.join(roomId);
      socket.emit("get-users", {
        roomId,
        participants: rooms[roomId],
      });
    }
  };

  socket.on("create-room", createRoom);

  socket.on("join-room", joinRoom);
};
