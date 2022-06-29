import { useState } from "react";
import { useTheme } from "../hooks/useTheme";
import Modal from "./Modal";
import NavBar from "./NavBar";
import styles from "./Pomodoro.module.scss";
import CountDown from "./CountDown";

export default function Pomodoro() {
	useState;
	// const [modalOpen, setModalOpen] = useState(false);
	const { modalStatus } = useTheme();
	return (
		<div className={styles.container}>
			<NavBar />
			<CountDown />
			{modalStatus && <Modal />}
		</div>
	);
}
