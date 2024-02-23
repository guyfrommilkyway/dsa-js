function rot13(s) {
	const a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const ls = s.split('');
	const len = ls.length;
	let f = '';

	for (let i = 0; i < len; i++) {
		const l = ls[i];
		const ia = a.includes(l);

		if (!ia) {
			f += l;
			continue;
		}

		const oi = a.indexOf(l) + 14; // 13 + 1
		const ni = oi === 26 ? 26 : oi % 26;
		const nl = a[ni - 1];

		f += nl;
	}

	return f;
}
