import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const themeReducer = (state, action) => {
	switch (action.type) {
		case "CHANGE_COLOR":
			return {
				...state,
				color: action.payload.color,
				otherComponentColor: action.payload.otherComponentColor,
			};
		case "CHANGE_MODAL":
			return { ...state, modalStatus: action.payload };
		case "CHANGE_VALUE":
			return { ...state, timerValue: action.payload };
		default:
			return state;
	}
};

export function ThemeProvider({ children }) {
	const [state, dispatch] = useReducer(themeReducer, {
		color: "#D95550",
		otherComponentColor: "#DD6662",
		modalStatus: false,
		timerValue: 25,
	});

	const changeColor = (color, otherComponentColor) => {
		dispatch({
			type: "CHANGE_COLOR",
			payload: {
				color: color,
				otherComponentColor: otherComponentColor,
			},
		});
	};
	const changeModal = (modalStatus) => {
		dispatch({ type: "CHANGE_MODAL", payload: modalStatus });
	};

	const changeValue = (timerValue) => {
		dispatch({ type: "CHANGE_VALUE", payload: timerValue });
	};

	return (
		<ThemeContext.Provider
			value={{ ...state, changeColor, changeModal, changeValue }}
		>
			{children}
		</ThemeContext.Provider>
	);
}
