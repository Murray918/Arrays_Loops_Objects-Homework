for(let i = 1;i<=20;i++)
{
	console.log(i)
}
for(let i = 0;i<=200;i++)
{
	if(i%2===0)
		console.log(i)
}
let stringArray = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]
for(let i = 0;i<20;i++)
{
	if(i%2===0)
	{
		console.log(stringArray[Math.floor(Math.random() * 3)])
	}
	else
		console.log("Love me, pet me! HSSSSSS!")
}

for(let i = 1;i<100;i++)
{
	let check1 = false
	let check2 = false
	if(i%3===0)
	{
		console.log("Fizz")
		check1 = true
	}
	if(i%5===0)
	{
		console.log("Buzz")
		check2 = true
	}
	if(check1&&check2)
	{
		console.log("FizzBuzz")
		check1 = false
		check2 = false
	}
}

const kenny = ["Kenny", 1000, "Austin"]
const jimHaff = ["Jim H", 16, "All cities"]
const reuben = ["Reuben", 22, "Durham"]
const jimClark = ["Jim C", 186, "LA"]
const ryan = ["Ryan", 65, "Denver"]
kenny[0] = "Gameboy"
jimClark[1]++
ryan[2] = "Gotham City"
reuben.pop()
reuben.push("Chicago")
jimHaff.pop()
jimHaff.push("Los Angeles", "Austin", "Sacramento")
jimHaff.splice(2, 1)
let ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
let turtle = ""
let swichFlag = false

for(let i = 0;i<ninjaTurtles.length;i++)
{
	for(let letter of ninjaTurtles[i])
	{
		if(!swichFlag)
		{
			turtle += letter.toUpperCase()
			swichFlag = true
		}
		else
		{
			turtle += letter
			swichFlag = false
		}
	}
	console.log(turtle)
}

//This problem was incorrect, kristyn's left shoe was already a property of kristyn's closet, so I had to move the property to Thom's accessories
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
let kristynsOutfit = ""
let thomsOutfit = ""
let thomsRandomNumber = 0
for(let i = 0;i<3;i++)
{
	thomsRandomNumber = Math.floor(Math.random()*2)
	kristynsOutfit += (kristynsCloset[Math.floor(Math.random()*5)] + "\n")
	thomsOutfit += thomsCloset[thomsRandomNumber][Math.floor(Math.random()*thomsCloset[thomsRandomNumber].length)] + "\n"
}

console.log("Thomas changes his outfit everytime you ask him to, right now he's wearing: \n"+thomsOutfit)
console.log("Kristyn changes her outfit everytime you ask her to, right now she's wearing: \n"+kristynsOutfit)
console.log("Thomas changes his outfit everytime you ask him to, right now he's wearing: \n"+thomsOutfit)
console.log("Kristyn changes her outfit everytime you ask her to, right now she's wearing: \n"+kristynsOutfit)
console.log("Thomas changes his outfit everytime you ask him to, right now he's wearing: \n"+thomsOutfit)
console.log("Kristyn changes her outfit everytime you ask her to, right now she's wearing: \n"+kristynsOutfit)

for(let item of kristynsCloset)
{
	console.log("WHIRR: Now washing "+item)
}
//array bracket notation?
for(let item of thomsCloset)
{
	console.log(item.toString()+"\n")
}
let sum = 0
for(let i = 0;i<1000;i++)
{
	if(i%3===0 || i%5===0)
		sum+=i
}
let argument = 15
let triangle = ""
for(let i = 0;i<=argument;i++)
{
	triangle += ('#'.repeat(i) + "\n")
}
console.log(triangle)
let triangle2 = ""
for(let i = (argument+1);i>0;i--)
{
	triangle2 += (' '.repeat(i-1) + '#'.repeat(argument-i+1) + "\n")
}
console.log(triangle2)
let triangle3 = ""
for(let i = argument;i>0;i--)
{
	triangle3 += ('#'.repeat(i) + "\n")
}
console.log(triangle3)
let triangle4 = ""
for(let i = (argument+1);i>0;i--)
{
	triangle4 += (' '.repeat(argument-i+1) + '#'.repeat(i-1) + "\n")
}
console.log(triangle4)
const nums = [14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18,12, 17, 12, 71, 18, 15, 12];
let nums2 = nums.sort()
let median = nums2[Math.floor(nums2.length/2)]
console.log(median)
