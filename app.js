
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



for(let kitten = 0; kitten < 20; kitten++){
	if(kitten % 2 == 0){
	console.log("Love me, pet me! HSSSSSS!")
  } else{
  	console.log("...human...why you taking pictures of me?...")
  }
}
*/
//CAN NOT GET THIS TO WORK RIGHT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! FizzBuzz wouldn't log =, (
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

/*
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
*/




