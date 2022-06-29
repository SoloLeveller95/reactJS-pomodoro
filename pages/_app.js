import { ThemeProvider } from "../context/ThemeContext";
import "../styles.scss";

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
