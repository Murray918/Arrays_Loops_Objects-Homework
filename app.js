//1.
for(i = 1; i<=20; i++){
	console.log(i)
}

//2.

for(i = 0; i <= 200; i = i +2){
	console.log(i)
}

//3.

let phrases = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]
let petMe = "Love me, pet me! HSSSSS!"

for(i =0; i<=20; i++){
let randomPhrases = Math.floor(Math.random()*phrases.length)
  console.log(petMe)
  if (i%2 === 0)
  console.log(phrases[randomPhrases])
  }



//4.

for(i = 1;i<=100; i++){
	if(i % 3 === 0 && i % 5 === 0)
		console.log("FizzBuzz")
	else if(i % 5 === 0)
		console.log("Buzz")
	else if(i % 3 === 0)
		console.log("Fizz")
	else{
		console.log(i)
	}
}

//5.

const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];

kenny[0] = "Gameboy"

let age = jimClark[1] + 1

ryan[2] = "Gotham City"

reuben.pop([2]);
reuben.push('Chicago')

jimHaff.pop([2])
jimHaff.push(['Austin', 'Detroit', 'Lousiville'])

console.log(jimHaff)






//6.
const ninjaTurtles = ['Donatello', 'Leonardo', 'Rapahel', 'Michaelangelo'];
for(i =0; i <= 3; i += 1){
	ninjaTurtles[i] = ninjaTurtles[i].toUpperCase();
}
console.log(ninjaTurtles)

//7.

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





		








