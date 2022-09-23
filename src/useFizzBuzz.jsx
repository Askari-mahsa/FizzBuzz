import { useState, useRef } from "react";

function useFizzBuzz({ x, n, m }) {
	const answer = useRef(null);
	const [counter, setCounter] = useState(x);

	function increase() {
		setCounter((pre) => counter + 1);
	}

	function decrease(pre) {
		setCounter(() => counter - 1);
	}
	console.log("mahsa");
	if (counter % n === 0) {
		answer.current = "Fizz";
	} else if (counter % m === 0) {
		answer.current = "Buzz";
	} else if (counter % m === 0 && x % n === 0) {
		answer.current = "Fizz Buzz";
	} else {
		answer.current = counter;
	}
	// console.log("X", x, counter, answer.current, n, m);
	return {
		answer,
		increase,
		decrease,
	};
}

export default useFizzBuzz;
