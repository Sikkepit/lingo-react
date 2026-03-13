import { createContext, useContext, type RefObject } from "react";
import type { winModalComponentType } from "../components/WinModal";

type LingoContextValue = {
	winningWord: string;
	guessCount: number;
	guessedWords: string[];
	isGameOver: boolean;

	winModalComponent: RefObject<winModalComponentType | null>;
	inputElement: RefObject<HTMLInputElement | null>;

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
