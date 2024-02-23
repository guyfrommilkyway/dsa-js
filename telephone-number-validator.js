function telephoneCheck(s) {
	const l = s.length;
	let f = '';

	const b = new Set(['(', ')', '-', ' ']);
	const d = new Set([
		'xxx-xxx-xxxx',
		'(xxx)xxx-xxxx',
		'(xxx) xxx-xxxx',
		'xxx xxx xxxx',
		'xxxxxxxxxx',
		'x xxx xxx xxxx',
		'x xxx-xxx-xxxx',
		'x (xxx) xxx-xxxx',
		'x(xxx)xxx-xxxx',
	]);

	// if it starts with 1
	// must be followed by space or (
	if (s[0] !== '1' && (s[1] === ' ' || s[1] === '(')) return false;

	for (let i = 0; i < l; i++) {
		const y = s[i];
		const vY = isNaN(parseInt(y));

		// invalid symbol and NaN
		if (!b.has(y) && vY) return false;

		f += !vY ? 'x' : y;
	}

	return d.has(f);
}
