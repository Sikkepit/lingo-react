/**
 * In the Dutch language the letter-combination "ij" is considered a single letter.
 * By converting "ij" to a single character the user can input more than 5 letters
 * when needed.
 */
export const convertLetterIj = (word: string) => {
	return word.replaceAll("ij", "9");
};

export const bringBackLetterIj = (word: string) => {
	return word.replace("9", "ij");
};
