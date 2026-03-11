export default function Letter({
	guessedWord,
	winningWord,
	index,
}: {
	guessedWord: string;
	winningWord: string;
	index: number;
}) {
	const letterValue = guessedWord.charAt(index);

	const getClass = () => {
		if (letterValue === "") return "";

		if (letterValue === winningWord.charAt(index)) {
			return "letter--red";
		}

		if (!winningWord.includes(letterValue)) {
			return "";
		}

		const shouldMarkYellow = getShouldMarkYellow();
		return shouldMarkYellow ? "letter--yellow" : "";
	};

	const getShouldMarkYellow = () => {
		const indexesOfLetter: number[] = [];

		[...winningWord].forEach((letter, i) => {
			const isInRightPosition = winningWord.charAt(i) === guessedWord.charAt(i);
			const isSameLetter = letter === letterValue;

			if (isSameLetter && !isInRightPosition) indexesOfLetter.push(i);
		});

		[...guessedWord].forEach((letter, i) => {
			// If the letter has already been marked yellow inside guessedWord
			// we pop an entry from the indexesOfLetter array
			const isInRightPosition = winningWord.charAt(i) === guessedWord.charAt(i);
			const isSameLetter = letter === letterValue;

			if (isSameLetter && !isInRightPosition && i < index) indexesOfLetter.pop();
		});

		// Mark yellow if there is an unmarked instance of the letter
		return indexesOfLetter.length > 0;
	};

	return <div className={`letter ${getClass()}`.trim()}>{letterValue.replace("9", "ij")}</div>;
}
