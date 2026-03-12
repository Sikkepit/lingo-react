import { getShouldMarkYellow } from "../util/gameUtils";
import { bringBackLetterIj } from "../util/stringUtils";

type LetterProps = {
	guessedWord: string;
	winningWord: string;
	index: number;
};

export default function Letter({ guessedWord, winningWord, index }: LetterProps) {
	const letterValue = guessedWord.charAt(index);

	const getClass = () => {
		if (letterValue === "" || !winningWord.includes(letterValue)) return "";

		if (letterValue === winningWord.charAt(index)) {
			return "letter--red";
		}

		const shouldMarkYellow = getShouldMarkYellow(winningWord, guessedWord, letterValue, index);
		return shouldMarkYellow ? "letter--yellow" : "";
	};

	return <div className={`letter stroked-text ${getClass()}`.trim()}>{bringBackLetterIj(letterValue)}</div>;
}
