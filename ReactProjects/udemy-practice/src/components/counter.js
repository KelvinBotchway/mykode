import React, { Component } from "react";
import { useState } from "react";
import "../header.css";

{
	/*This is use state in React it is used for updating components in react */
}
function Counter() {
	let count = 0;
	const [currentstate, updatedstate] = useState(count);
	const handleClick = () => {
		updatedstate(currentstate + 1);
	};
	return (
		<div className="main-counter">
			<h3>Counter</h3>
			<button onClick={handleClick}>{currentstate}</button>
		</div>
	);
}
export default Counter;
