import { useLingo } from "../context/LingoContext";
import { getShouldMarkYellow } from "../util/gameUtils";
import { bringBackLetterIj } from "../util/stringUtils";

type LetterProps = {
	guessedWord: string;
	index: number;
};

export default function Letter({ guessedWord, index }: LetterProps) {
	const { winningWord } = useLingo();

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
