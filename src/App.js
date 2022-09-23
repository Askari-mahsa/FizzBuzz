import Counter from "./Counter";
import useFizzBuzz from "./useFizzBuzz";

function App() {
	const fizzBuzz1 = useFizzBuzz({ x: 1, n: 3, m: 5 });
	const fizzBuzz2 = useFizzBuzz({ x: 10, n: 17, m: 7 });
	return (
		<div>
			<Counter {...fizzBuzz1} />
			<Counter {...fizzBuzz2} />
		</div>
	);
}

export default App;
