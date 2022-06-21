import styles from "./Modal.module.scss";
import { FaTimes } from "react-icons/fa";

const Modal = () => {
	return (
		<div className={styles.modalBackground}>
			<div className={styles.modalContainer}>
				<div className={styles.modalUpper}>
					<p>TIMER SETTING</p>
					<button>
						<FaTimes />
					</button>
				</div>
				<div className={styles.modalLower}>
					<p>Time (minutes)</p>
					<div className={styles.modalLowerInput}>
						<div>
							<p>Pomodoro</p>
							<input type="number" />
						</div>
						<div>
							<p>Short Break</p>
							<input type="number" />
						</div>
						<div>
							<p>Long Break</p>
							<input type="number" />
						</div>
					</div>
					<button>OK</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
