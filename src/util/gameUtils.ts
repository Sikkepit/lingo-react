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

/**
 * Helper function for checking if a letter has to be marked yellow inside
 * a guessed word. A letter is marked yellow if it's in the word but not in the
 * correct place. The function takes in account previously marked letters
 */
export const getShouldMarkYellow = (winningWord: string, guessedWord: string, letterValue: string, index: number) => {
	const indexesOfLetter: number[] = [];

	[...winningWord].forEach((letter, i) => {
		const isInRightPosition = winningWord.charAt(i) === guessedWord.charAt(i);
		const isSameLetter = letter === letterValue;

		if (isSameLetter && !isInRightPosition) indexesOfLetter.push(i);
	});

	[...guessedWord].forEach((letter, i) => {
		// If the letter has already been marked yellow inside guessedWord
		// we don't want to mark ik twice. We pop an entry from the indexesOfLetter array
		const isInRightPosition = winningWord.charAt(i) === guessedWord.charAt(i);
		const isSameLetter = letter === letterValue;

		if (isSameLetter && !isInRightPosition && i < index) indexesOfLetter.pop();
	});

	// Mark yellow if there is an unmarked instance of the letter
	return indexesOfLetter.length > 0;
};
