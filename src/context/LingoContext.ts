import { createContext, useContext } from "react";

type LingoContextValue = {
	winningWord: string;

	score: number;
	setScore: React.Dispatch<React.SetStateAction<number>>;

	guessCount: number;

	currentGuess: string;
	setCurrentGuess: React.Dispatch<React.SetStateAction<string>>;

	guessedWords: string[];

	isValid: boolean;
	setIsValid: React.Dispatch<React.SetStateAction<boolean>>;

	isGameOver: boolean;

	initNewRound: () => void;
	handleGuess: () => void;
};

export const LingoContext = createContext<LingoContextValue | undefined>(undefined);

export const useLingo = (): LingoContextValue => {
	const context = useContext(LingoContext);

	if (!context) throw new Error("Lingo components must be used within LingoProvider");

	return context;
};
