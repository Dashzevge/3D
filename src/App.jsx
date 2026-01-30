import React from "react";
import Navbar from "./sections/Navbar";
import Home from "./sections/Home";


const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;