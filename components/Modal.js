import styles from "./Modal.module.scss";
import { FaTimes } from "react-icons/fa";
import { useTheme } from "../hooks/useTheme";
import { useState } from "react";

const Modal = () => {
	const [pomodoroValue, setPomodoroValue] = useState("25");
	const [shortbrekValue, setShortbrekValue] = useState("5");
	const [longbreakValue, setlongbreakValue] = useState("15");
	const {
		changeModal,
		changePomodoroValue,
		changeShortBreakValue,
		changeLongBreakValue,
	} = useTheme();
	console.log(pomodoroValue);
	console.log(shortbrekValue);
	console.log(longbreakValue);

	const handleSubmit = (e) => {
		e.preventDefault();
		changeModal(false);
		changePomodoroValue(pomodoroValue);
		changeShortBreakValue(shortbrekValue);
		changeLongBreakValue(longbreakValue);
	};
	return (
		<form onSubmit={handleSubmit} className={styles.modalBackground}>
			<div className={styles.modalContainer}>
				<div className={styles.modalUpper}>
					<p>TIMER SETTING</p>
					<button onClick={() => changeModal(false)}>
						<FaTimes />
					</button>
				</div>
				<div className={styles.modalLower}>
					<p>Time (minutes)</p>
					<div className={styles.modalLowerInput}>
						<div>
							<p>Pomodoro</p>
							<input
								type="number"
								value={pomodoroValue}
								onChange={(e) => setPomodoroValue(parseInt(e.target.value))}
							/>
						</div>
						<div>
							<p>Short Break</p>
							<input
								type="number"
								value={shortbrekValue}
								onChange={(e) => setShortbrekValue(parseInt(e.target.value))}
							/>
						</div>
						<div>
							<p>Long Break</p>
							<input
								type="number"
								value={longbreakValue}
								onChange={(e) => setlongbreakValue(parseInt(e.target.value))}
							/>
						</div>
					</div>
					<button type="submit">OK</button>
				</div>
			</div>
		</form>
	);
};

export default Modal;
