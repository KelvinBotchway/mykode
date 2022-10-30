import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/about");
	};

	return (
		<>
			<p>This is the home page</p>
			<button onClick={handleClick}>Click me</button>
		</>
	);
}
export default Home;
