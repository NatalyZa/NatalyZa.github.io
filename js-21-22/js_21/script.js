
function pow (x, n) {
	var result = x;
	for (var i = 1; i < n; i++) {
		result *=x;
	}

	if (n === 0) {
		result = 1;
	}
	if (n < 0) {
		result = 1 / pow(x, -n);
	}
	return result;
}
// 	var x = Math.round(prompt('Введите целое число', ''));
// 	var n = Math.round(prompt('Введите степень', ''));
// console.log(pow(x,n));
try {
	module.exports = pow;
} catch(e) {}

