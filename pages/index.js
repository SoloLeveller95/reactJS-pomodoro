import Pomodoro from "../components/Pomodoro";
import { useTheme } from "../hooks/useTheme";

export default function Home() {
	const { color } = useTheme();
	return (
		<div style={{ backgroundColor: color, color: "white" }}>
			<Pomodoro />
		</div>
	);
}
