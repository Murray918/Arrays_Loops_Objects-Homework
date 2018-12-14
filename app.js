// Easy going

// 1. Write a for loop that will log the numbers 1 through 20.

// for (let i=1; i<=20; i++) {
// 	console.log(i);
// }

// Get Even

// 1. Write a for loop that will log only the even numbers in 0 through 200.

// for (let i=0; i<=200; i+=2) {
// 	console.log(i);
// }

// Excited Kitten

// 1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
// 2. For every even number in your loop, log "...human...why you taking pictures of me?...",
// "...the catnip made me do it...", or "...why does the red dot always get away..." at random.

// for (let i=1; i<=40; i++) {
// 	if (i % 2 === 0) {
// 		if (Math.random() <= 0.395) {
// 			console.log("...human...why you taking pictures of me?...");
// 		} else if (0.395 < Math.random() <= 0.695) {
// 			console.log("...the catnip made me do it...");
// 		} else if (0.695 < Math.random() < 1) {
// 			console.log("...why does the red dot always get away...");
// 		} else {console.log("Math.random() error")} // confirmed something is slipping through my Math.random() usage
// 	} else {console.log("Love me, pet me! HSSSSSS!");}
// }

// FizzBuzz 

// 1. Write a javascript application that logs all numbers from 1 - 100.
// 2. If a number is divisible by 3 log "Fizz" instead of the number.
// 3. If a number is divisible by 5 log "Buzz" instead of the number.
// 4. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

// for (let i=1; i<= 100; i++) {
// 	if (i % 3 === 0 && i % 5 === 0) {
// 		console.log("FizzBuzz");
// 	} else if (i % 3 === 0) {
// 		console.log("Fizz");
// 	} else if (i % 5 === 0) {
// 		console.log("Buzz");
// 	} else console.log(i);
// }


