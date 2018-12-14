//1.
for (i=0;i<21;i++){
	console.log(i)
}
//2.
for (i=0; i<200;i++){
	if (i % 2 ===0) 
	console.log(i)
}
//3,	
for (j=0; j<20; j++){
	console.log("Love me, pet me!HSSSSSS")
	if (j % 1 ===0){
		console.log("...human...why are you taking pictures of me?")
	}
	}
//4.
for (i=0; i<100;i++){
	if (i % 3 ===0){
		console.log("Fizz")
	
		} else if  (i % 5 ===0){
			console.log("Buzz")
		} else if (i %3 ===0 && i % 5 ===0){
			console.log("FizzBuzz")
		} else {
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
console.log(kenny)
ryan[2] = "Gotham City"
console.log(ryan)
reuben.pop()
console.log(reuben)
reuben.push("Chicago")
console.log(reuben)
jimHaff.pop()
jimHaff.push("Austin","Midland","Amarillo")
console.log(jimHaff)
jimHaff.splice(2,1)
console.log(jimHaff)


ninjaTurtles = [ "Donatello","Leonardo","Michaelangelo"]
for (i=0;i<3;i++){
	console.log(ninjaTurtles[i].toUpperCase())
	
}
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

let kristynsShoe = "left shoe"
thomsCloset[2].push(kristynsShoe)
//console.log(thomsCloset)

//thomsCloset.info = function(){
//	return thomsCloset[[0]] }
//console.log(thomsCloset.info())

thomsCloset.forEach(thomsCloset => console.log(thomsCloset))