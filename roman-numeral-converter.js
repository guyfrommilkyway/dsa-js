function convertToRoman(n) {
	const d = new Map([
		[
			0,
			{
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
		],
		[
			1,
			{
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
		],
		[
			2,
			{
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
		],
		[
			3,
			{
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
		],
	]);

	const ns = n.toString().split('').reverse();
	const l = ns.length - 1;
	let on = '';
	let te = '';
	let hu = '';
	let th = '';

	for (let i = l; i >= 0; i--) {
		const j = ns[i];

		switch (i) {
			case 0:
				on = d.get(i)[j];
				break;
			case 1:
				te = d.get(i)[j];
				break;
			case 2:
				hu = d.get(i)[j];
				break;
			case 3:
				th = d.get(i)[j];
				break;
			default:
				console.log('Error');
		}
	}

	return th + hu + te + on;
}
