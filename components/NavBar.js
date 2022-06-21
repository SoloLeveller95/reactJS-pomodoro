import styles from "./NavBar.module.scss";
import { AiFillSetting } from "react-icons/ai";

const NavBar = () => {
	return (
		<div className={styles.container}>
			<h1>Pomodoro</h1>
			<div className={`${styles.setting} `}>
				<AiFillSetting className={styles.icon} />
				<p>Settings</p>
			</div>
		</div>
	);
};

export default NavBar;
