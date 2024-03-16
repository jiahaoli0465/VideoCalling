import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import socketIO from "socket.io-client";

const WS = "http://localhost:8080";

function App() {
  useEffect(() => {
    const socket = socketIO(WS);
    socket.on("connect", () => {
      console.log("Connected to server");
    });
  }, []);

  return (
    <div className="flex items-center justify-center w-screen h-screen ">
      <button className="bg-rose-400 py-2 px-8 rounded-lg text-xl hover:bg-rose-600 text-white">
        Start New Meeting
      </button>
    </div>
  );
}

export default App;
