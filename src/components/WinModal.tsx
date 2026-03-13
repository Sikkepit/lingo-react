import { useImperativeHandle, useRef, useState, type RefObject } from "react";
import { createPortal } from "react-dom";
import { bringBackLetterIj } from "../util/stringUtils";
import Confetti from "./Confetti";
import { useLingo } from "../context/LingoContext";

export type winModalComponentType = {
	showModal: (winningWord: string) => void;
};

export default function WinModal({ ref }: { ref: RefObject<winModalComponentType | null> }) {
	const [isVisible, setShowIsVisible] = useState(false);
	const [winningWord, setWinningWord] = useState("");
	const { inputElement } = useLingo();

	const buttonRef = useRef<HTMLButtonElement>(null);

	const showModal = (winningWord: string) => {
		setShowIsVisible(true);
		setWinningWord(winningWord);

		setTimeout(() => {
			buttonRef.current?.focus();
		}, 0);
	};

	const hideModal = () => {
		setShowIsVisible(false);
		inputElement.current?.focus();
	};

	useImperativeHandle(ref, () => {
		return {
			showModal,
		};
	});

	if (!isVisible) return <></>;

	return createPortal(
		<>
			<Confetti />

			<div className="modal">
				<button className="modal__backdrop" onClick={() => setShowIsVisible(false)}></button>

				<div className="modal__content">
					<h2 className="modal__header">HOPPA!</h2>

					<span>
						Je hebt <b>{bringBackLetterIj(winningWord).toUpperCase()}</b> geraden!
					</span>

					<button type="button" onClick={hideModal} className="button" ref={buttonRef}>
						Volgende woord
					</button>
				</div>
			</div>
		</>,
		document.body,
	);
}
