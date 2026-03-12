import { useLingo } from "../context/LingoContext";
import GameBoard from "./GameBoard";
import GameOver from "./GameOver";
import Logo from "./Logo";
import Score from "./Score";

export default function Lingo() {
	const { isGameOver } = useLingo();

	return (
		<div className="main">
			<Score />

			<Logo />

			{isGameOver ? <GameOver /> : <GameBoard />}
		</div>
	);
}
