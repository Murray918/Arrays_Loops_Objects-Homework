// 1. Complete. Push request sent.
for (i = 0; i <= 20; i++)
	console.log(i)

// 2. Complete. Push request sent.
for (i = 0; i <= 200; i+=2)
	console.log(i)

// // 3.
// let cat = ["human, why are you taking pictures of me?", "the catnip made me do it", "why does the red dot always get away"]
// for (i = 0; i <= 20; i++)
// 	if (i % 2 == 0){
// 		console.log(cat(Math.random))
// 	}
// 	else console.log("love me, pet me! HSSSSSS!")

// 4. Complete. Push request sent.
for (i = 0; i <= 100 ; i++)
	if (i % 3 == 0 && i % 5 == 0) {
		console.log("FizzBuzz")
	}
	else if (i % 5 == 0) { 
		console.log("buzz")
	}
	else if (i % 3 == 0) 
		console.log("Fizz")
	else {
		console.log(i)
	}

// 5. 
const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];

kenny[0] = "gameboy"
jimClark[1]
console.log(jimClark[1])
ryan[2] = "Gotham City"
reuben.pop()
reuben.push("Chicago")
jimHaff.pop()
jimHaff.push("New Orleans " + "Nashville " + "Portland")
// .splice()??
console.log()

// 6.
let ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
for (z = 0; z < 4; z++) {
	console.log(ninjaTurtles[z])
}
// No matter what I did I couldn't get .toUpperCase() to behave properly. I referenced Google several times, and found lots of posts on StackOverflow, MDN etc, but console threw an error every time.

// 7.
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

kristynsCloset.splice(0,1)
console.log(kristynsCloset)
// 8.
// 9.
for (j = 0; j <= 1000; j++)
	if (j % 3 == 0 && j % 5 ==0)
		console.log(j)