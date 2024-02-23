function rot13(str) {
	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const letters = str.split('');
	const length = letters.length;
	const final = [];

	for (let i = 0; i < length; i++) {
		const letter = letters[i];
		const isAlpha = alphabet.includes(letter);

		if (isAlpha) {
			const oldIndex = alphabet.indexOf(letter) + 14; // 13 + 1
			const newIndex = oldIndex === 26 ? 26 : oldIndex % 26;
			const newLetter = alphabet[newIndex - 1];

			final.push(newLetter);
		} else {
			final.push(letter);
		}
	}

	return final.join('');
}
