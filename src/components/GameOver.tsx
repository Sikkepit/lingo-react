export default function GameOver({ onRestart }: { onRestart: () => void }) {
	return (
		<>
			<h1 className="stroked-text">Game Over!</h1>
			<button type="button" onClick={onRestart} className="button">
				Probeer opnieuw
			</button>
		</>
	);
}
