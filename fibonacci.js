// fibonacci numbers solution Using a for loop
const fibs = (n) => {
	let fibArr = [];
	for (let i = 0; i < n; i++) {
		if (i == 0) fibArr.push(i);
		if (i == 1) fibArr.push(i);
		if (i > 1) fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
	}
	return fibArr;
};

// Fibonacci numbers solution using recursion
const fibsRec = (n, arr = [0, 1]) => {
	if (n == 0) return [arr[0]];
	if (n == 1) return arr;
	if (n < 3) return arr;
	return fibsRec(n - 1, [...arr, arr[arr.length - 1] + arr[arr.length - 2]]);
};
