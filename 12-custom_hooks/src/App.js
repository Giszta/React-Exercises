import "./App.css";
import { useToogle } from "./useToggle";

function App() {
	const [isVisible, toggle] = useToogle();

	return (
		<div className="App">
			<button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
			{isVisible && <h1>Hidden text</h1>}
		</div>
	);
}

export default App;
