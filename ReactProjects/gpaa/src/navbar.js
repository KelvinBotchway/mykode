import React from "react";
import "./style.css";

function Navbar() {
  return (
    <>
      <nav className="nav">
        <div>
          <a className="text-pa">GPA CALCULATOR</a>
        </div>
        <ul className="nav-items">
          <li className="guide">Guide</li>
          <li>Social</li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
