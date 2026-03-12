import { useImperativeHandle, useRef, useState, type RefObject } from "react";
import { createPortal } from "react-dom";

export type WinModalRefType = {
	showModal: (winningWord: string) => void;
};

export default function WinModal({ ref }: { ref: RefObject<WinModalRefType | null> }) {
	const [isVisible, setShowIsVisible] = useState(false);
	const [winningWord, setWinningWord] = useState("");

	const buttonRef = useRef<HTMLButtonElement>(null);

	const showModal = (winningWord: string) => {
		setShowIsVisible(true);
		setWinningWord(winningWord);

		setTimeout(() => {
			buttonRef.current?.focus();
		}, 0);
	};

	useImperativeHandle(ref, () => {
		return {
			showModal,
		};
	});

	if (!isVisible) return <></>;

	return createPortal(
		<div className="modal">
			<button className="modal__backdrop" onClick={() => setShowIsVisible(false)}></button>

			<div className="modal__content">
				<h2 className="modal__header">HOPPA!</h2>
				<span>
					Je hebt <b>{winningWord.toUpperCase()}</b> geraden!
				</span>
				<img src="/dance.gif" alt="bewegend plaatje van dansend meisje" />

				<button
					type="button"
					onClick={() => setShowIsVisible(false)}
					className="button"
					ref={buttonRef}
				>
					Volgende woord
				</button>
			</div>
		</div>,
		document.body,
	);
}
