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
		case "CHANGE_POMODOROVALUE":
			return { ...state, pomodoroValue: action.payload };
		case "CHANGE_SHORTVALUE":
			return { ...state, shortbrekValue: action.payload };
		case "CHANGE_LONGVALUE":
			return { ...state, longbreakValue: action.payload };
		default:
			return state;
	}
};

export function ThemeProvider({ children }) {
	const [state, dispatch] = useReducer(themeReducer, {
		color: "#D95550",
		otherComponentColor: "#DD6662",
		modalStatus: false,
		pomodoroValue: 25,
		shortbrekValue: 5,
		longbreakValue: 15,
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

	const changePomodoroValue = (pomodoroValue) => {
		dispatch({ type: "CHANGE_POMODOROVALUE", payload: pomodoroValue });
	};
	const changeShortBreakValue = (shortbrekValue) => {
		dispatch({ type: "CHANGE_SHORTVALUE", payload: shortbrekValue });
	};
	const changeLongBreakValue = (longbreakValue) => {
		dispatch({ type: "CHANGE_LONGVALUE", payload: longbreakValue });
	};

	return (
		<ThemeContext.Provider
			value={{
				...state,
				changeColor,
				changeModal,
				changePomodoroValue,
				changeShortBreakValue,
				changeLongBreakValue,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
}
