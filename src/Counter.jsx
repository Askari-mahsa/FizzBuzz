const Counter = ({ answer, increase, decrease }) => {
	// console.log(answer.current);
	return (
		<div style={{ display: "flex", flexDirection: "row" }}>
			<button onClick={increase}>+</button>
			<h4>{answer.current}</h4>
			<button onClick={decrease}>-</button>
		</div>
	);
};

export default Counter;
