//1) Write a for loop that will log the numbers 1 through 20.
console.log(`******* 1) Easy Going *******`);
for(let i = 1; i <= 20; ++i)
{
	console.log(`Number is: ${i}`);
}



//2) Write a for loop that will log only the even numbers in 0 through 200.
console.log(`******* 2) Get Even *******`);
for(let i = 0; i <= 20; ++i)
{
	if (i%2==0)
	{
		console.log(`Number is: ${i}`);
	}
}



//3) Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
//For every even number in your loop, log "...human...why you taking pictures of me?...", 
//"...the catnip made me do it...", or "...why does the red dot always get away..." at random.
console.log(`******* 3) Excited Kittens *******`);
let random = 0;
for (let i = 1; i <= 20; ++i)
{
	console.log(`Love me, pet me! HSSSSSS! Count = ${i}`);
	if (i%2 == 0)
	{
		random = ( Math.floor( (Math.random() * 100)) % 3);
		if (random == 0)
			console.log("...human...why you taking pictures of me?...");
		else if (random == 1)
			console.log("...the catnip made me do it...");
		else
			console.log("...why does the red dot always get away...");
	}
}

//4) Write a javascript application that logs all numbers from 1 - 100.
//If a number is divisible by 3 log "Fizz" instead of the number.
//If a number is divisible by 5 log "Buzz" instead of the number.
//If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.
console.log(`******* 4) Fizz Buzz *******`);
for (let i = 1; i <= 100; ++i)
{
	if ((i%3 == 0) && (i%5 == 0))
		console.log("Number = FizzBuzz");
	else if (i%3 == 0)
		console.log("Number = Fizz");
	else if (i%5 == 0)
		console.log("Number = Buzz");
	else
		console.log(`Number = ${i}`);
}





//5) Jim Clark decides that Kenny can't be named "Kenny" anymore. Remove "Kenny" from the kenny array and replace it with "Gameboy".
//- Jim Clark just had his birthday; change jimClark's array to reflect him being a year older. Don't just hard code 187--pretend that you 
//  didn't already know that his age is 186, and write your code to just make him a year older than whatever age he was.
//- Ryan is Batman maybe. Or possibly Robin. Change Ryan's hometown from "Denver" to "Gotham City".
//- Reuben left Durham 5 years ago to come to Chicago. First, remove "Durham" from Reuben's array, and then add "Chicago". 
//  (Note: remove and then add is different from simply changing the value at that index.)
//- Jim Haff could be literally anywhere in the world. Remove "All cities" from his array, then pick any 3 cities you like, 
//  and add them to Jim's array. If you did it in 3 lines of code that's fine, but see if you can do it in one line of code
//- Bonus: Whoops! Jim Haff is actually only allowed to be in one of two cities. Whatever the first of the 3 cities for Jim Haff is now, 
//  remove it from the array using .splice()
console.log(`******* 5) Getting to Know You -- See Code too *******`);
const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];

kenny[0] = "Gameboy";
console.log(kenny);
jimClark[1] = jimClark[1] + 1;
console.log(jimClark[1]);
ryan[2] = "Gotham City";
console.log(ryan[2]);
reuben.pop();
reuben.push("Chicago");
console.log(reuben);
jimHaff.splice(2,1,"Atlanta", "New York", "Miami");  //remove "All cities" and add 3 new cities
console.log(jimHaff);
jimHaff.splice(2,1);   //bonus
console.log(jimHaff);

//6) Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
//Use a for loop to call .toUpperCase() on each of them and print out the result.
//Bonus: Modify the answer you just wrote. Instead of all letters being uppercase, make the letters alternate back and forth between uppercase and lowercase.

console.log(`******* 6) Yell at the Ninja Turtles *******`);
nt = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for (let turtles of nt)
{
	turtles = turtles.toUpperCase();
	console.log(turtles);
}
console.log(`******* 6) Yell at the Ninja Turtles BONUS *******`);

for (let turtles of nt)
{
	let turtlesCharacters = turtles.split('')

	for (let i = 0; i <= turtles.length; ++i)
	{
		if (i%2 == 0)
		{
			turtlesCharacters.splice(i,1,turtles.charAt(i).toUpperCase());  //replace the current letter with the Uppercase
		}
	}
	turtles = turtlesCharacters.join('');
	console.log(turtles);	
}




//7) Alien Attire
//- Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! 
//  Remove Kristyn's shoe from the array and save it to the variable kristynsShoe. Use that variable to add Kristyn's lost shoe to Thom's accessories array.
//Dress 'em Up
//- Modify your code to put together 3 separate outfits for Kristyn and Thom. Put the output in a sentence to tell us what we'll be wearing. Mix and match! 

console.log(`******* 7) Return of the Closets *******`);
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

let kristynsShoe = kristynsCloset.shift();
thomsCloset[2].push(kristynsShoe);
console.log(`Tom's accessories now has Kristy's ${thomsCloset[2][3]}`);
console.log(`Kristy is wearing ${kristynsCloset[0]} with ${kristynsCloset[3]} and ${kristynsCloset[2]}`);
console.log(`Tom is wearing ${thomsCloset[0][1]} with ${thomsCloset[1][1]} and ${thomsCloset[2][2]}`);



//8) Dirty Laundry
//Continue looking at the closet arrays:
//- Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.
//Inventory
//- Thom wants to do inventory on his closet. Using bracket notation, log the arrays (not the elements in the arrays) containing all of Thom's shirts, pants, and accessories.

console.log(`******* 8) Dirty Laundry *******`);

for (let items of kristynsCloset)
{
	console.log(`WHIRR: Now washing ${items}`);
}
console.log(`Tom has ${thomsCloset[0].length} shirts, ${thomsCloset[1].length} pants and ${thomsCloset[2].length} accessories`);


//9) If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.
console.log(`******* 9) Multiples of 3 and 5 *******`);
let naturalNumbersArray = 0;
const n = 1000;
const m1 = 3;
const m2 = 5;

//needs to equal 233168.  This is way easier to read than trying to enter the formula!!!
//This way is not going to be the fastest or least amount of memory to achieve the answer by no means, but at least I can follow it!!!
//for loop speed is 0(log n) vs the formula is 0(n).
for (let i = 0; i < n/2; ++i)
{
	if ( (m1*i) < n)
		naturalNumbersArray += 3*i;
		
	if ( (m2*i) < n)
		naturalNumbersArray += 5*i;

	//remove dups
	if ( (m1*m2*i) < n)
		naturalNumbersArray -= 3*5*i;
}

console.log(`The sum of all the multiples of 3 or 5 below 1000 = ${naturalNumbersArray}`);


//This is the formula below -- it was too confusing to write and no one could decipher it later
//3⋅333(333+1)/2
//n/m1 = 333 
//m1*(n/m1)*((n/m1)+1)/2 = 166833 
//n/m2 = 200 
//m2*(n/m2)((n/m2)+1)/2 = 99500
//n/m1*m2 = 66  = 33165

//formula is below...
//console.log(Math.floor((n/m1))*m1 * (Math.floor((n/m1+1)))/2);
//console.log(Math.floor((n/m2))*m2 * (Math.floor((n/m2+1)))/2);
//console.log(Math.floor((n/(m1*m2)))*m1*m2 * (Math.floor((n/(m1*m2)+1)))/2);

console.log(`******* Bonus #2) Find the Median *******` );
let min = 0;
let max = 0;
const nums = [14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18,12, 17, 12, 71, 18, 15, 12];
nums.sort();
//console.log(nums);

if (nums.length % 2 == 0)  //even
	console.log(nums[nums.length/2]);
else
{
	min = nums[Math.floor(nums.length/2)];
	//console.log(min);
	max = nums[Math.ceil(nums.length/2)];
	//console.log(max);
	console.log((min+max)/2);
}


