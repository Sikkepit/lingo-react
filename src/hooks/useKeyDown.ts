import { useEffect } from "react";

/**
 * Adds an event listener that executes a callback function when the user
 * presses the defined key.
 */
export function useKeyDown(callback: () => void, key: string) {
	useEffect(() => {
		function handleKeyDown(e: KeyboardEvent) {
			if (e.key === key) {
				callback();
			}
		}

		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	});
}
