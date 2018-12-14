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