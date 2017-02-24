var question = 600851475143;
var one = 2;
var two = 0;
var nQuestion = question;

while (one < nQuestion) {
	two = nQuestion / one;
	if (two % 1 ===0) {
		nQuestion = two;
		one = 2;
		console.log(nQuestion);
	}
	else {
		one++;
	}
}