import React, { Component } from "react";

function Body() {
  return (
    <>
      <div className="bg-slate-900 text-white mx-20 h-96 text-left flex justify-between  ">
        <div className=" bg-slate-900 p-5 mx-5 ">
          <h1 className="pt-5">GPA Calculator</h1>
          Calculate your high school, college and cumulative GPA, check your
          grades and understand how the GPA scale works.
        </div>
        <div className="bg-slate-900 p-5 mx-5"></div>
      </div>
      <div>
        <ul>
          <li>
            <div>
              <h3>Semester</h3>
            
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Body;
