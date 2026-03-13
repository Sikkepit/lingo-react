import { useLingo } from "../context/LingoContext";
import { bringBackLetterIj } from "../util/stringUtils";

export default function GameOver() {
	const { setScore, initNewRound, winningWord } = useLingo();

	return (
		<>
			<h1 className="stroked-text">Game Over!</h1>
			<span>
				Het juist antwoord was <b>{bringBackLetterIj(winningWord).toUpperCase()}</b>
			</span>
			<button
				type="button"
				onClick={() => {
					setScore(0);
					initNewRound();
				}}
				className="button"
				style={{ marginTop: "1rem" }}
			>
				Probeer opnieuw
			</button>
		</>
	);
}
