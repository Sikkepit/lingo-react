import { wordList } from "../constants/wordlist";
import { convertLetterIj } from "./stringUtils";

/**
 * Returns a random word from the word list.
 */
export const getWinningWord = (): string => {
	const lastIndex = wordList.length - 1;
	const winningWordIndex = Math.round(Math.random() * lastIndex);
	const winningWord = wordList[winningWordIndex];

	// For debugging/cheating purposes
	console.log(winningWord);

	return convertLetterIj(winningWord);
};

/**
 * Returns a new string containing the letters that have been guessed at the correct position. Letters that
 * not have been guessed are shown as dashes
 */
export const getGuessedLetters = (guessedWord: string, guessedLetters: string, winningWord: string): string => {
	const newGuessedLetters = [...guessedLetters];
	const currentGuessLowerCase = guessedWord;

	[...winningWord].forEach((letter, index) => {
		if (winningWord.charAt(index) === currentGuessLowerCase.charAt(index)) {
			newGuessedLetters[index] = letter;
		}
	});

	return newGuessedLetters.join("");
};
