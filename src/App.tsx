import { LingoProvider } from "./context/LingoProvider";
import Lingo from "./components/Lingo";

export default function App() {
	return (
		<LingoProvider>
			<Lingo />
		</LingoProvider>
	);
}
