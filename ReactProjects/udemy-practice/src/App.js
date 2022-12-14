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

// import "./App.css";
// import Home from "./components/home";
// import About from "./components/about";
// import { Routes, Route } from "react-router-dom";
// import { useEffect, useState } from "react";
// import Header from "./components/header.js";
// import Error from "./components/error";
// {
// 	/* hello this is react- router- dom*/
// }

// function App() {
// 	return (
// 		<Routes>
// 			<Route
// 				path="/"
// 				element={
// 					<>
// 						<Header />
// 						<Home />
// 					</>
// 				}
// 			/>
// 			<Route
// 				path="/about"
// 				element={
// 					<>
// 						<Header />
// 						<About />
// 					</>
// 				}
// 			/>

// 			<Route
// 				path="*"
// 				element={
// 					<>
// 						<Error />
// 					</>
// 				}
// 			/>
// 		</Routes>
// 	);
// }
// export default App;
import { useState } from "react";

function App() {
	const [result, setResult] = useState("");

	const clickHandler = (event) => {
		setResult(result.concat(event.target.value));
	};

const clear = () => {
	setResult('')
}

const calculate = () =>{
	setResult(eval(result).toString())
}
	return (
		<>
			<div className="calc">
				<input type="text" placeholder="0" id="answer" value={result}></input>
				<input
					type="button"
					value="9"
					className="button"
					onClick={clickHandler}></input>
				<input
					type="button"
					value="8"
					className="button"
					onClick={clickHandler}></input>
				<input
					type="button"
					value="7"
					className="button"
					onClick={clickHandler}></input>
				<input
					type="button"
					value="6"
					className="button"
					onClick={clickHandler}></input>
				<input
					type="button"
					value="5"
					className="button"
					onClick={clickHandler}></input>
				<input
					type="button"
					value="4"
					className="button"
					onClick={clickHandler}></input>
				<input
					type="button"
					value="3"
					className="button"
					onClick={clickHandler}></input>
				<input
					type="button"
					value="2"
					className="button"
					onClick={clickHandler}></input>
				<input
					type="button"
					value="1"
					className="button"
					onClick={clickHandler}></input>

				<input type="button" value="0" className="button"onClick={clickHandler}></input>
				<input type="button" value="+" className="button"onClick={clickHandler}></input>
				<input type="button" value="-" className="button"onClick={clickHandler}></input>
				<input type="button" value="/" className="button"onClick={clickHandler}></input>
				<input type="button" value="*" className="button"onClick={clickHandler}></input>
				<input type="button" value="%" className="button"onClick={clickHandler}></input>
				<input type="button" value="." className="button"onClick={clickHandler}></input>
				<input type="button" value="CE" className="button button1" onClick={clear}></input>
				<input type="button" value="=" className="button button1" onClick={calculate}></input>
			</div>
		</>
	);
}

export default App;
