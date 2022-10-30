// import logo from "./logo.svg";
// import "./App.css";
// import Test from "./test";
// import { useEffect, useState } from "react";
// {
// 	/*Conditional rendering of JSX element and use effect
//   Use effect gives the window alert when it is clicked*/
// }
// function App() {
// 	useEffect(() => {
// 		window.alert("I am clicked");
// 	});
// 	const [toggle, updatetoggle] = useState(false);
// 	return (
// 		<div>
// 			<button
// 				onClick={() => {
// 					updatetoggle(!toggle);
// 				}}>
// 				Toggle
// 			</button>
// 			{toggle && <Test />}
// 		</div>
// 	);
// }

import "./App.css";
import Home from "./components/home";
import About from "./components/about";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/header.js";
import Error from "./components/error";
{
	/* hello this is react- router- dom*/
}

function App() {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<>
						<Header />
						<Home />
					</>
				}
			/>
			<Route
				path="/about"
				element={
					<>
						<Header />
						<About />
					</>
				}
			/>

			<Route
				path="*"
				element={
					<>
						<Error />
					</>
				}
			/>
		</Routes>
	);
}
export default App;
