function checkCashRegister(price, cash, cid) {
	const dictionary = {
		PENNY: 0.01,
		NICKEL: 0.05,
		DIME: 0.1,
		QUARTER: 0.25,
		ONE: 1,
		FIVE: 5,
		TEN: 10,
		TWENTY: 20,
		'ONE HUNDRED': 100,
	};
	const change = [];
	const balance = +cid.reduce((a, b) => a + b[1], 0).toFixed(2);
	let due = cash - price;

	if (balance < due) return { status: 'INSUFFICIENT_FUNDS', change: [] };
	if (balance === due) return { status: 'CLOSED', change: cid };

	for (let i = cid.length - 1; i >= 0; i--) {
		const name = cid[i][0];
		const total = cid[i][1];
		const value = dictionary[name];
		let count = total / value;
		let amount = 0;

		while (due >= value && count > 0) {
			due -= value;
			due = Math.round(due * 100) / 100;
			count--;
			amount += value;
		}

		if (amount > 0) change.push([name, +amount.toFixed(2)]);
	}

	if (due > 0) return { status: 'INSUFFICIENT_FUNDS', change: [] };

	return { status: 'OPEN', change: change };
}
