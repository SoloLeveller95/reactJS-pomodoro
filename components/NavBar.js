import styles from "./NavBar.module.scss";
import { AiFillSetting } from "react-icons/ai";
import { useTheme } from "../hooks/useTheme";

const NavBar = () => {
	const { otherComponentColor, changeModal } = useTheme();
	return (
		<div className={styles.container}>
			<h1>Pomodoro</h1>
			<div
				className={`${styles.setting} `}
				style={{ backgroundColor: otherComponentColor }}
				onClick={() => changeModal(true)}
			>
				<AiFillSetting className={styles.icon} />
				<p>Settings</p>
			</div>
		</div>
	);
};

export default NavBar;
