function telephoneCheck(str) {
	const numbers = '0123456789';
	const specials = '()- ';
	const formats = [
		'xxx-xxx-xxxx',
		'(xxx)xxx-xxxx',
		'(xxx) xxx-xxxx',
		'xxx xxx xxxx',
		'xxxxxxxxxx',
		'x xxx xxx xxxx',
		'x xxx-xxx-xxxx',
		'x (xxx) xxx-xxxx',
		'x(xxx)xxx-xxxx',
	];

	const nums = str.split('');
	const length = nums.length;
	const final = [];

	// invalid format
	if (nums[0] !== '1' && (nums[1] === ' ' || nums[1] === '(')) return false;

	for (let i = 0; i < length; i++) {
		const isValid = numbers.includes(nums[i]);
		const isInvalid = !specials.includes(nums[i]) && !numbers.includes(nums[i]);

		// invalid character
		if (isInvalid) return false;

		final.push(isValid ? 'x' : nums[i]);
	}

	return formats.includes(final.join(''));
}
