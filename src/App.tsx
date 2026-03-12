import { getGuessedLetters, getWinningWord } from "./util/gameUtils";
import { convertLetterIj } from "./util/stringUtils";
import { useState } from "react";

import TextInput from "./components/TextInput";
import Word from "./components/Word";
import ConfirmButton from "./components/ConfirmButton";
import Logo from "./components/Logo";
import GameOver from "./components/GameOver";

export default function App() {
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
		<div className="main">
			<Logo />
			<span className="score">Score: {score}</span>

			{!isGameOver && (
				<>
					<div className="wrapper">
						{guessedWords.map((word, index) => (
							<Word
								key={index}
								guessedWord={word}
								isCurrentGuess={guessCount === index}
								winningWord={winningWord}
							/>
						))}
					</div>

					<div className="controls">
						<TextInput
							value={currentGuess}
							disabled={isGameOver}
							onChange={(value) => {
								if (!isValid) setIsValid(true);
								setCurrentGuess(value);
							}}
							isValid={isValid}
							onKeyDown={(e) => {
								if (e.key === "Enter") handleGuess();
							}}
						/>

						<ConfirmButton onClick={handleGuess} disabled={isGameOver} />
					</div>
				</>
			)}

			{isGameOver && (
				<GameOver
					onRestart={() => {
						setScore(0);
						initNewRound();
					}}
				/>
			)}
		</div>
	);
}
