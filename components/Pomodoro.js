import { useState } from "react";
import Modal from "./Modal";
import NavBar from "./NavBar";
import styles from "./Pomodoro.module.scss";
import Timer from "./Timer";

export default function Pomodoro() {
	useState;
	const [modalOpen, setModalOpen] = useState(true);
	return (
		<div className={styles.container}>
			<NavBar />
			<Timer />
			{modalOpen && <Modal />}
		</div>
	);
}
