import { wordList } from "../constants/wordlist";
import { convertLetterIj } from "./stringUtils";

export const getWinningWord = () => {
	const lastIndex = wordList.length - 1;
	const winningWordIndex = Math.round(Math.random() * lastIndex);
	const winningWord = wordList[winningWordIndex];

	console.log(winningWord);

	return convertLetterIj(winningWord);
};

export const getGuessedLetters = (guessedWord: string, guessedLetters: string, winningWord: string) => {
	const newGuessedLetters = [...guessedLetters];
	const currentGuessLowerCase = guessedWord;

	[...winningWord].forEach((letter, index) => {
		if (winningWord.charAt(index) === currentGuessLowerCase.charAt(index)) {
			newGuessedLetters[index] = letter;
		}
	});

	return newGuessedLetters.join("");
};
