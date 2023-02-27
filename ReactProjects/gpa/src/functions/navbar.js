import React from "react";
import Body from "./body";

function Navbar() {
  return (
    <>
      <nav className="rounded-t-2xl bg-slate-900 mt-5 mx-20 p-5 text-white flex flex-row  justify-between">
        <div>
          <a className="Nav-left flex flex-row items-end">GPA CALCULATOR</a>
        </div>
        <ul className="flex flex-row items-center">
          <li className="px-8">Guide</li>
          <li>Social</li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
