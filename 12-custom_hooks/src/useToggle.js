import { useState } from "react";
export const useToogle = (initialValue = false) => {
	const [state, setState] = useState(initialValue);

	const toggle = () => {
		setState((prev) => !prev);
	};

	return [state, toggle];
};
