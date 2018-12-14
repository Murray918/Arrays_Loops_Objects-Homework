/*
for(let i = 1 ; i <= 20; i++){
	console.log(i)
}

for(let i = 0; i <=200; i++){
	if(i%2 !=1){
		console.log(i)
	}
}

let getCatSaying = function(max) {
	return  Math.floor(Math.random() * Math.floor(max))
}

let catSayings = ["...human...why you taking pictures of me?...","...the catnip made me do it...",
"...why does the red dot always get away..."]

for(let x = 0;x <=20; x++){
	if(x%2 !=1){
		console.log(catSayings[getCatSaying(3)])
		} else {
			console.log('Love me, pet me! HSSSSS!')
		}
	}
*/

/*

for(let i = 1; i<=100; i++){
	if(i%3 ==0 && i%5 == 0){
		console.log('FizzBuzz')
	}else if(i%5 == 0){
		console.log('Buzz')
	}else if(i%3 ==0){
		console.log('Fizz')
	}else {
		console.log(i)
	}
}*/
const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];

kenny[0] = 'Gameboy'

jimClark[1] = jimClark[1] + 1

ryan[2] = 'Gotham City'

reuben.pop()
reuben.push('chicago')

jimHaff.pop()
jimHaff.push('houston','austin','dallas')

jimHaff.splice(2,1)


















