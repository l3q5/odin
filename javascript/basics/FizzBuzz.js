let num = parseInt(prompt("Enter the desired number: "));
for (let i = 1; i < num; i++) {
	switch (true) {
		case i % 3 == 0 && i % 5 == 0:
			console.log("FizzBuzz");
			break;
		case i % 3 == 0:
			console.log("Fizz");
			break;
		case i % 5 == 0:
			console.log("Buzz");
			break;
		default:
			console.log(i);
			break;
	}
}
