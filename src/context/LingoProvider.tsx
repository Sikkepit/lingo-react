import { useState } from "react";
import { getWinningWord, getGuessedLetters } from "../util/gameUtils";
import { convertLetterIj } from "../util/stringUtils";
import { LingoContext } from "./LingoContext";

export const LingoProvider = ({ children }: { children: React.ReactNode }) => {
	const [winningWord, setWinningWord] = useState(getWinningWord);
	const [score, setScore] = useState(0);

	const [guessCount, setGuessCount] = useState(0);
	const [currentGuess, setCurrentGuess] = useState("");

	const [guessedLetters, setGuessedeLetters] = useState(`${winningWord.charAt(0)}----`);
	const [guessedWords, setGuessedWords] = useState([guessedLetters, "", "", "", ""]);

	const [isValid, setIsValid] = useState(true);

	const isGameOver = guessCount === 5;

	const initNewRound = () => {
		const newWinningWord = getWinningWord();
		const newGuessedLetters = `${newWinningWord.charAt(0)}----`;
		const newGuessedWords = [newGuessedLetters, "", "", "", ""];

		setWinningWord(newWinningWord);
		setGuessedeLetters(newGuessedLetters);
		setGuessedWords(newGuessedWords);
		setGuessCount(0);
	};

	const handleGuess = () => {
		if (isGameOver) return;

		const guessedWord = convertLetterIj(currentGuess).toLowerCase();
		if (guessedWord.length !== 5) {
			setIsValid(false);
			return;
		}

		setCurrentGuess("");

		if (guessedWord === winningWord) {
			handleWin();
			return;
		}

		handleNextTurn(guessedWord);
	};

	const handleWin = () => {
		setScore(score + 100);
		initNewRound();
	};

	const handleNextTurn = (guessedWord: string) => {
		const newGuessedLetters = getGuessedLetters(guessedWord, guessedLetters, winningWord);
		const newGuessedWords = [...guessedWords];

		newGuessedWords[guessCount] = guessedWord;

		if (guessCount < 4) {
			newGuessedWords[guessCount + 1] = newGuessedLetters;
		}

		setGuessedWords(newGuessedWords);
		setGuessedeLetters(newGuessedLetters);
		setGuessCount((oldValue) => oldValue + 1);
	};

	return (
		<LingoContext
			value={{
				winningWord,
				guessCount,
				guessedWords,
				isGameOver,

				score,
				setScore,

				currentGuess,
				setCurrentGuess,

				isValid,
				setIsValid,

				initNewRound,
				handleGuess,
			}}
		>
			{children}
		</LingoContext>
	);
};
