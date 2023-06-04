import React, { Component } from "react";
import Input from "./input";

function Body() {
  return (
    <>
      <div className="bg-slate-900 text-white mx-20 h-50 text-left flex justify-between  ">
        <div className=" bg-slate-900 p-5 mx-5 w-2/4">
          <h1 className="pt-5">GPA Calculator</h1>
          <p className="w-2/4">
            Calculate your high school, college and cumulative GPA,check your
            grades and understand how the GPA scale works.
          </p>
        </div>
      </div>
      <Input />
    </>
  );
}

export default Body;
