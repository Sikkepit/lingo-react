import { useLingo } from "../context/LingoContext";
import ConfirmButton from "./ConfirmButton";
import TextInput from "./TextInput";
import Word from "./Word";

export default function GameBoard() {
	const { guessedWords, guessCount } = useLingo();

	return (
		<>
			<div className="wrapper">
				{guessedWords.map((word, index) => (
					<Word key={index} guessedWord={word} isCurrentGuess={guessCount === index} />
				))}
			</div>

			<div className="controls">
				<TextInput />

				<ConfirmButton />
			</div>
		</>
	);
}
