import React, { useEffect } from "react";

import "./App.css";
import { CreateButton } from "./components/CreateButton";

const WS = "http://localhost:8080";

function App() {
  return (
    <div className="flex items-center justify-center w-screen h-screen ">
      <CreateButton />
    </div>
  );
}

export default App;
