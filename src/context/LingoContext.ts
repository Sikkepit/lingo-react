import { createContext, useContext } from "react";

type LingoContextValue = {
	winningWord: string;
	guessCount: number;
	guessedWords: string[];
	isGameOver: boolean;

	score: number;
	setScore: React.Dispatch<React.SetStateAction<number>>;

	currentGuess: string;
	setCurrentGuess: React.Dispatch<React.SetStateAction<string>>;

	isValid: boolean;
	setIsValid: React.Dispatch<React.SetStateAction<boolean>>;

	initNewRound: () => void;
	handleGuess: () => void;
};

export const LingoContext = createContext<LingoContextValue | undefined>(undefined);

export const useLingo = (): LingoContextValue => {
	const context = useContext(LingoContext);

	if (!context) throw new Error("Lingo components must be used within LingoProvider");

	return context;
};
