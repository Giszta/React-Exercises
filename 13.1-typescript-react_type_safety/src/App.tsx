import React from 'react';
import "./App.css";
import { Person, Sex } from "./components/Person";


function App() {
	return (
		<div className="App">
			<Person
				name="Adam"
				email="adam@gmail.com"
				age={27}
				isMarried={false}
				friends={["Szymon", "Tomek", "Kasia", "Zosia"]}
        sex={Sex.male}
			/>
		</div>
	);
}

export default App;
