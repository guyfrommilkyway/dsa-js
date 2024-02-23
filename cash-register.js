function checkCashRegister(price, cash, cid) {
	const d = new Map([
		['PENNY', 0.01],
		['NICKEL', 0.05],
		['DIME', 0.1],
		['QUARTER', 0.25],
		['ONE', 1],
		['FIVE', 5],
		['TEN', 10],
		['TWENTY', 20],
		['ONE HUNDRED', 100],
	]);

	const c = [];
	const b = +cid.reduce((a, b) => a + b[1], 0).toFixed(2);
	let du = cash - price;

	if (b < du) return { status: 'INSUFFICIENT_FUNDS', change: [] };
	if (b === du) return { status: 'CLOSED', change: cid };

	for (let i = cid.length - 1; i >= 0; i--) {
		const n = cid[i][0];
		const t = cid[i][1];
		const v = d.get(n);
		let co = t / v;
		let am = 0;

		while (du >= v && co > 0) {
			du -= v;
			du = Math.round(du * 100) / 100;
			co--;
			am += v;
		}

		if (am > 0) c.push([n, +am.toFixed(2)]);
	}

	if (du > 0) return { status: 'INSUFFICIENT_FUNDS', change: [] };

	return { status: 'OPEN', change: c };
}
