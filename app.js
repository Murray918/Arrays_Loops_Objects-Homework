/*
for(let i=1; i<=100; i++) {
	console.log(i)
}
*/


/*
for(let i=0; i<=200; i++) {
	if ((i%2) == 0) {
		console.log(i)
	}
}
*/

/*
let i = 1;

while(i <= 20) {
	console.log("Love me, pet me! HSSSSSS!")
	i++
}


for(i; i<=20; i++) {
	if ((i%2) == 0){
		console.log(i)
	}
}
*/

/*
for(i=1; i<100; i++) {
	
	if ((i%3)==0 && (i%5)==0) {
			console.log("FizzBuzz")
	}
	else if ((i%3) == 0){
		console.log("Fizz")
	}
	else if((i%5) == 0) {
		console.log("Buzz")
	}
	
	else {
		console.log(i)
	}
}
*/

/*
const kenny = ["Gameboy", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];



jimClark[1]++;
ryan[2] = "Gotham City";
reuben.pop();
reuben.push("Chicago");
jimHaff.pop();
jimHaff.push("New York", "Tokyo", "Berlin");


console.log(reuben[2])
console.log(jimHaff)
*/


/*
let ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for(let name of ninjaTurtles) {
	console.log(name.toUpperCase());
}
*/


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



let kristynsShoe = kristynsCloset[0];
thomsCloset[2].push(kristynsShoe);


console.log(thomsCloset[2]);

