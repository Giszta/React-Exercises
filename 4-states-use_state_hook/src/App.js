import "./App.css";
import { useState } from "react";

function App() {
	const [count, setCount] = useState(0);

	const increaseCounter = () => {
		setCount(count + 1);
	};
	const decreaseCounter = () => {
		setCount(count - 1);
	};
	const reset = () => {
		setCount(0);
	};

	return (
		<div className="App">
			<button onClick={decreaseCounter}>Decrease</button>
			<button onClick={reset}>Set to 0</button>
			<button onClick={increaseCounter}>Increase</button>
			<br></br>
			<h1>{count}</h1>
		</div>
	);
}

// -----USESTATE EXAMPLE 4-----
// function App() {
// 	const [textColor, setTextColor] = useState("black");

// 	return (
// 		<div className="App">
// 			<button
// 				onClick={() => {
// 					setTextColor(textColor === "black" ? "red" : "black");
// 				}}
// 			>
// 				Change Color
// 			</button>
// 			<h1 style={{ color: textColor }}>Have a nice day!</h1>
// 		</div>
// 	);
// }

// -----USESTATE EXAMPLE 3-----
// function App() {
// 	const [showText, setShowText] = useState(true);

// 	return (
// 		<div className="App">
// 			<button
// 				onClick={() => {
// 					setShowText(!showText);
// 				}}
// 			>
// 				Show/Hide
// 			</button>
// 			{showText === true && <h1>Have a nice day!</h1>}
// 		</div>
// 	);
// }

//-----USESTATE EXAMPLE 2-----
// function App() {
// 	const [inputValue, setInputValue] = useState("");

// 	const handleInputChange = (event) => {
// 		setInputValue(event.target.value);
// 	};
// 	return (
// 		<div className="App">
// 			<input type="text" onChange={handleInputChange}></input>
// 			{inputValue}
// 		</div>
// 	);
// }

//-----USESTATE EXAMPLE 1-----
// function App() {
// 	const [age, setAge] = useState(0);

// 	const increaseAge = () => {
// 		setAge(age + 1);
// 	};
// 	return (
// 		<div className="App">
// 			{age}
// 			<button onClick={increaseAge}>increase Age</button>
// 		</div>
// 	);
// }

export default App;
