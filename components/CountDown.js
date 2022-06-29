import { useTheme } from "../hooks/useTheme";
import Timer from "react-compound-timer";
import styles from "./CountDown.module.scss";
import { useState } from "react";

const CountDown = () => {
	const { changeColor, otherComponentColor } = useTheme();
	const [isActive1, setIsActive1] = useState(true);
	const [isActive2, setIsActive2] = useState(false);
	const [isActive3, setIsActive3] = useState(false);
	const [timerStart, setTimerStart] = useState(false);
	const [timerPause, setTimerPause] = useState(false);

	const handleClick1 = () => {
		setIsActive1(true);
		setIsActive2(false);
		setIsActive3(false);
	};
	const handleClick2 = () => {
		setIsActive1(false);
		setIsActive2(true);
		setIsActive3(false);
	};
	const handleClick3 = () => {
		setIsActive1(false);
		setIsActive2(false);
		setIsActive3(true);
	};
	console.log(timerStart);

	const values = 1;
	return (
		<div
			className={styles.container}
			style={{ backgroundColor: otherComponentColor }}
		>
			<div className={`${styles.flex} ${styles.timerGroupButtons}`}>
				<button
					onClick={() => {
						changeColor("#D95550", "#DD6662");
						handleClick1();
					}}
					style={
						isActive1
							? { backgroundColor: "#bc5753" }
							: { backgroundColor: "transparent" }
					}
				>
					Pomodoro
				</button>
				<button
					onClick={() => {
						changeColor("#4C9195", "#5E9CA0");
						handleClick2();
					}}
					style={
						isActive2
							? { backgroundColor: "#508588" }
							: { backgroundColor: "transparent" }
					}
				>
					Short Break
				</button>
				<button
					onClick={() => {
						changeColor("#457CA3", "#5889AC");
						handleClick3();
					}}
					style={
						isActive3
							? { backgroundColor: "#4b7592" }
							: { backgroundColor: "transparent" }
					}
				>
					Long Break
				</button>
			</div>
			<div className={`${styles.flex} ${styles.timerValue}`}>
				<h1>
					<Timer
						initialTime={values * 600000}
						lastUnit="m"
						direction="backward"
						startImmediately={false}
					>
						{({ start, resume, pause, stop, reset }) => (
							<>
								<div>
									<Timer.Minutes
										formatValue={(value) =>
											`${value < 10 ? `0${value}` : value}`
										}
									/>{" "}
									:{" "}
									<Timer.Seconds
										formatValue={(value) =>
											`${value < 10 ? `0${value}` : value}`
										}
									/>
								</div>

								<div className={`${styles.flex} ${styles.startButton}`}>
									<button
										onClick={() => {
											start();
											setTimerStart(true);
											setTimerPause(false);
										}}
										style={
											timerStart
												? {
														boxShadow: "",
														color: otherComponentColor,
														marginRight: "20px",
														transform: "translateY(0)",
												  }
												: {
														boxShadow: "rgb(235 235 235) 0px 6px 0px",
														color: otherComponentColor,
														marginRight: "20px",
														transform: "translateY(-6px)",
												  }
										}
									>
										START
									</button>
									<button
										onClick={() => {
											pause();
											setTimerStart(false);
											setTimerPause(true);
										}}
										style={
											timerPause
												? {
														boxShadow: "",
														color: otherComponentColor,
														transform: "translateY(0)",
												  }
												: {
														boxShadow: "rgb(235 235 235) 0px 6px 0px",
														color: otherComponentColor,
														transform: "translateY(-6px)",
												  }
										}
									>
										PAUSE
									</button>
								</div>
							</>
						)}
					</Timer>
				</h1>
			</div>
		</div>
	);
};

export default CountDown;
