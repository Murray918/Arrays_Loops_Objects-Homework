
//Write a for loop that will log the numbers 1 through 20.

/*
for(let i = 1; i <= 20; i++){
	console.log(i)
}


//Write a for loop that will log only the even numbers in 0 through 200.

for(let i = 1; i <=200; i++){
	if(i % 2 == 0){
		console.log(i)
	}
}


let kitty = ["...human...why you taking pictures of me?...", "...the catnip made me do it..." , "...why does the red dot always get away..."]
for(let kitten = 0; kitten < 20; kitten++){
	if(kitten % 2 == 0){
	console.log("Love me, pet me! HSSSSSS!")
  } else{
  	console.log(kitty[Math.floor(Math.random() * 3)])
  }
}


for(i = 0; i <= 100; i++){
	if(i % 3 === 0 && i % 5 === 0){
		console.log('FizzBuzz')
	}else if(i % 5 ===0){
		console.log('Buzz')
	}else if(i % 3 === 0){
		console.log('Fizz')
	}else{
		console.log(i)
	}
}

const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];


kenny[0] = 'GameBoy'
jimClark[1] = 187
ryan[2] = 'Gotham City'
reuben[2] = 'Chicago'

jimHaff.splice(2, 1, 'Miami', 'New York', 'Detroit')
jimHaff.splice(4, 1)

console.log(jimHaff)


let turtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']
  for(let i of turtles){
     console.log(i.toUpperCase())
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

let kristynsShoe = kristynsCloset.shift() 
thomsCloset[2].push(kristynsShoe)

//console.log("Today, Kristyn is wearing, " + kristynsCloset[0] + " " + kristynsCloset[3] + " and thom is wearing, " + thomsCloset[2][1] + " " + thomsCloset[2][2])
//console.log("Today, Kristyn is wearing, " + kristynsCloset[3] + " " + kristynsCloset[2] + " and thom is wearing, " + thomsCloset[0][2] + " " + thomsCloset[0][3])
//console.log("Today, Kristyn is wearing, " + kristynsCloset[1] + " " + kristynsCloset[4] + " and thom is wearing, " + thomsCloset[1][1] + " " + thomsCloset[1][2])

for(let i = 0; i < kristynsCloset.length; i++){
	console.log("WHIRR: Now washing " + kristynsCloset[i])
}

for(let i = 0; i < thomsCloset.length; i++){
	console.log(thomsCloset[i].toString() + "\n")
}


let stored = 0

for(let i = 0; i <= 1000; i++){
   if(i % 3 == 0 || i % 5 == 0){
   	 stored = stored + i
   }
}
console.log(stored)
*/
let x = 2
let y = 2
console.log(x + y)



