import { useLingo } from "../context/LingoContext";

export default function TextInput() {
	const { isGameOver, currentGuess, isValid, setIsValid, setCurrentGuess, handleGuess } = useLingo();

	return (
		<input
			className={`input ${!isValid ? "input--error" : ""}`.trim()}
			type="text"
			value={currentGuess}
			disabled={isGameOver}
			onKeyDown={(e) => {
				if (e.key === "Enter") handleGuess();
			}}
			onChange={(e) => {
				if (!isValid) setIsValid(true);
				setCurrentGuess(e.target.value);
			}}
		/>
	);
}
