import { useLingo } from "../context/LingoContext";

export default function GameOver() {
	const { setScore, initNewRound } = useLingo();

	return (
		<>
			<h1 className="stroked-text">Game Over!</h1>
			<button
				type="button"
				onClick={() => {
					setScore(0);
					initNewRound();
				}}
				className="button"
			>
				Probeer opnieuw
			</button>
		</>
	);
}
