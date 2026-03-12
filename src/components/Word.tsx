import { useLingo } from "../context/LingoContext";
import Letter from "./Letter";

type WordProps = {
	guessedWord: string;
	isCurrentGuess: boolean;
};

export default function Word({ guessedWord, isCurrentGuess }: WordProps) {
	const { winningWord } = useLingo();

	return (
		<div className={`word ${!isCurrentGuess ? "word--marked" : ""}`.trim()}>
			{Array.from({ length: 5 }).map((_, index) => (
				<Letter key={index} index={index} guessedWord={guessedWord} winningWord={winningWord} />
			))}
		</div>
	);
}
