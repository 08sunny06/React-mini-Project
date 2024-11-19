import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";

const App = () => {
  return (
    <div className="flex flex-col h-screen" >
      <Navbar />
      <Body />
    </div>
  );
};

export default App;
