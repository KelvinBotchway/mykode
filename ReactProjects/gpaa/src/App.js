import React from "react";
import GPACalculator from "./GPACalculator";
import Navbar from "./navbar";
import "./style.css"

const App = () => {
  return (
    <div className="entire-body">
      <Navbar/>
      <GPACalculator />
    </div>
  );
};

export default App;
