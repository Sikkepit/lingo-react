import Letter from "./Letter";

type WordProps = {
	guessedWord: string;
	winningWord: string;
	isCurrentGuess: boolean;
};

export default function Word({ guessedWord, winningWord, isCurrentGuess }: WordProps) {
	return (
		<div className={`word ${!isCurrentGuess ? "word--marked" : ""}`.trim()}>
			{Array.from({ length: 5 }).map((_, index) => (
				<Letter key={index} index={index} guessedWord={guessedWord} winningWord={winningWord} />
			))}
		</div>
	);
}
