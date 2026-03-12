import { useLingo } from "../context/LingoContext";

export default function ConfirmButton() {
	const { isGameOver, handleGuess } = useLingo();

	return (
		<button type="button" className="submit" onClick={handleGuess} disabled={isGameOver}>
			OK
		</button>
	);
}
