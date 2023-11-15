import "./App.css";
// import { User } from "./User";
import { Planets } from "./Planets";

function App() {
	const planets = [
		{ name: "Mars", isGasPlanet: false },
		{ name: "Earth", isGasPlanet: false },
		{ name: "Jupiter", isGasPlanet: true },
		{ name: "Venus", isGasPlanet: false },
		{ name: "Neptune", isGasPlanet: true },
		{ name: "Uranus", isGasPlanet: true },
	];
	return (
		<div className="App">
			{planets.map((planet, keys) => {
				// if (planet.isGasPlanet) {
				// 	return <h1>{planet.name} is gas planet</h1>;
				// } else {
				// 	return <h1>{planet.name} is not gas planet</h1>;
				// }
				return planet.isGasPlanet ? (
					<div style={{ color: "green" }}>
						<Planets name={planet.name} />
					</div>
				) : (
					<div style={{ color: "red" }}>
						<Planets name={planet.name} />
					</div>
				);
				// if (planet.isGasPlanet) {
				// 	return <h1>{planet.name} is gas planet</h1>;
				// } else {
				// 	return <h1>{planet.name} is not gas planet</h1>;
				// }
				// if (planet.isGasPlanet) return <Planets name={planet.name} />;
			})}
		</div>
	);
}
// -----LIST-----
// function App() {
// 	const users = [
// 		{ name: "Adam", age: 21 },
// 		{ name: "Kasia", age: 25 },
// 		{ name: "Tomek", age: 28 },
// 	];
// 	return (
// 		<div className="App">
// 			{users.map((user, key) => {
// 				return <User name={user.name} age={user.age} />;
// 			})}
// 		</div>
// 	);
// }

// -----TERNARY OPERATORS-----
// function App() {
// 	const age = 15;
// 	const isGreen = false;

// 	return (
// 		<div className="App">
// 			{age >= 18 ? <h1>OVER AGE</h1> : <h1>UNDER AGE</h1>}
// 			<h1 style={{ color: isGreen ? "green" : "red" }}>TEXT</h1>
// 			{isGreen && <button>BUTTON</button>}
// 		</div>
// 	);
// }

export default App;
