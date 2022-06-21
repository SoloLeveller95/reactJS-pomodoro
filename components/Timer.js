import styles from "./Timer.module.scss";

const Timer = () => {
	return (
		<div className={styles.container}>
			<div className={`${styles.flex} ${styles.timerGroupButtons}`}>
				<button>Pomodoro</button>
				<button>Short Break</button>
				<button>Long Break</button>
			</div>
			<div className={`${styles.flex} ${styles.timerValue}`}>
				<p>120 : 00</p>
			</div>
			<div className={`${styles.flex} ${styles.startButton}`}>
				<button>START</button>
			</div>
		</div>
	);
};

export default Timer;
