import Letter from "./Letter";

export default function Word({
	guessedWord,
	winningWord,
	isCurrentGuess,
}: {
	guessedWord: string;
	winningWord: string;
	isCurrentGuess: boolean;
}) {
	return (
		<div className={`word ${!isCurrentGuess ? "word--marked" : ""}`.trim()}>
			{Array.from({ length: 5 }).map((_, index) => (
				<Letter key={index} index={index} guessedWord={guessedWord} winningWord={winningWord} />
			))}
		</div>
	);
}
