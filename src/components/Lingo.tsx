import { useLingo } from "../context/LingoContext";
import GameBoard from "./GameBoard";
import GameOver from "./GameOver";
import Logo from "./Logo";
import Score from "./Score";
import WinModal from "./WinModal";

export default function Lingo() {
	const { isGameOver, winModalRef } = useLingo();

	return (
		<div className="main">
			<Score />

			<Logo />

			<WinModal ref={winModalRef} />

			{isGameOver ? <GameOver /> : <GameBoard />}
		</div>
	);
}
