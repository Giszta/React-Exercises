import "./App.css";
import { Person } from "./components/Person";

function App() {
	return (
		<div className="App">
			<Person
				name="Adam"
				email="adam@gmail.com"
				age={27}
				isMarried={false}
				friends={["Szymon", "Tomek", "Kasia", "Zosia"]}
			/>
		</div>
	);
}

export default App;
