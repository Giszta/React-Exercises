import "./App.css";

function App() {
	return (
		<div className="App">
			<User name="Adam" age={27} email="adam@gmail.com" />
			<User name="Szymon" age={28} email="szymon@gmail.com" />
			<User name="Kuba" age={21} email="kuba@gmail.com" />
		</div>
	);
}

const User = (props) => {
	return (
		<div>
			<h1>{props.name}</h1>
			<h2>{props.age}</h2>
			<h2>{props.email}</h2>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
		</div>
	);
};

const Job = (props) => {
	return (
		<div>
			<h1>{props.salary}</h1>
			<h1>{props.poition}</h1>
			<h1>{props.comapny}</h1>
		</div>
	);
};
export default App;
