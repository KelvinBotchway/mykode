import React from "react";


function Navbar() {
  return (
    <>
      <nav className=" bg-slate-900 p-5 text-white flex flex-row  justify-between">
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
