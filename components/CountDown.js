import { useTheme } from "../hooks/useTheme";
import Timer from "react-compound-timer";
import styles from "./CountDown.module.scss";
import { useEffect, useState, useRef } from "react";

const CountDown = () => {
	const {
		changeColor,
		otherComponentColor,
		pomodoroValue,
		shortbrekValue,
		longbreakValue,
	} = useTheme();
	// const audioElement = new Audio();
	// const [audio] = useState(
	// 	typeof Audio !== "undefined" && new Audio("/sound.wav")
	// );
	// audio.play();
	// console.log(audio);
	// audio.play();

	const [isActive1, setIsActive1] = useState(true);
	const [isActive2, setIsActive2] = useState(false);
	const [isActive3, setIsActive3] = useState(false);
	const [timerStart, setTimerStart] = useState(false);
	const [timerPause, setTimerPause] = useState(false);
	const [audio, setAudio] = useState(null);
	const [audio2, setAudio2] = useState(null);
	const [initialTime, setinitialTime] = useState(pomodoroValue);
	const buttonClickedRef = useRef();

	useEffect(() => {
		setinitialTime(pomodoroValue);
		setAudio(new Audio("/sound5.wav"));
		setAudio2(new Audio("/sound4.wav"));
	}, [pomodoroValue, shortbrekValue, longbreakValue]);

	const handleClick1 = () => {
		setIsActive1(true);
		setIsActive2(false);
		setIsActive3(false);
		setinitialTime(pomodoroValue);
		setTimerStart(false);
		setTimerPause(false);
	};
	const handleClick2 = () => {
		setIsActive1(false);
		setIsActive2(true);
		setIsActive3(false);
		setinitialTime(shortbrekValue);
		setTimerStart(false);
		setTimerPause(false);
	};
	const handleClick3 = () => {
		setIsActive1(false);
		setIsActive2(false);
		setIsActive3(true);
		setinitialTime(longbreakValue);
		setTimerStart(false);
		setTimerPause(false);
	};

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
					ref={buttonClickedRef}
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
				<div key={initialTime}>
					<Timer
						initialTime={initialTime * 60000}
						lastUnit="m"
						direction="backward"
						startImmediately={false}
						checkpoints={[
							{
								time: 0,
								callback: () => {
									audio.play();
									buttonClickedRef.current.click();
								},
							},
						]}
					>
						{({ start, resume, pause, stop, reset }) => (
							<>
								<h1>
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
								</h1>

								<div className={`${styles.flex} ${styles.startButton}`}>
									<button
										onClick={() => {
											start();
											setTimerStart(true);
											setTimerPause(false);
											audio2.play();
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
											audio2.play();
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
				</div>
			</div>
		</div>
	);
};

export default CountDown;
