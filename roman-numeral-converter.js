function convertToRoman(num) {
	const DICTIONARY = {
		0: {
			0: '',
			1: 'I',
			2: 'II',
			3: 'III',
			4: 'IV',
			5: 'V',
			6: 'VI',
			7: 'VII',
			8: 'VIII',
			9: 'IX',
		},
		1: {
			0: '',
			1: 'X',
			2: 'XX',
			3: 'XXX',
			4: 'XL',
			5: 'L',
			6: 'LX',
			7: 'lXX',
			8: 'LXXX',
			9: 'XC',
		},
		2: {
			0: '',
			1: 'C',
			2: 'CC',
			3: 'CCCC',
			4: 'CD',
			5: 'D',
			6: 'DC',
			7: 'DCC',
			8: 'DCCC',
			9: 'CM',
		},
		3: {
			0: '',
			1: 'M',
			2: 'MM',
			3: 'MMM',
			4: 'MMMM',
			5: 'MMMMMM',
			6: 'MMMMMM',
			7: 'MMMMMMM',
			8: 'MMMMMMMM',
			9: 'MMMMMMMMM',
		},
	};

	const nums = num.toString().split('').reverse();
	const length = nums.length - 1;
	let ones = '';
	let tens = '';
	let hundreds = '';
	let thousands = '';

	for (let i = length; i >= 0; i--) {
		const j = nums[i];

		switch (i) {
			case 0:
				ones = DICTIONARY[i][j];
				break;
			case 1:
				tens = tens = DICTIONARY[i][j];
				break;
			case 2:
				hundreds = DICTIONARY[i][j];
				break;
			case 3:
				thousands = DICTIONARY[i][j];
				break;
			default:
				break;
		}
	}

	return thousands + hundreds + tens + ones;
}
