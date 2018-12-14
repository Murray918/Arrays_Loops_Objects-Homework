/*
for(let i = 1 ; i <= 20; i++){
	console.log(i)
}

for(let i = 0; i <=200; i++){
	if(i%2 !=1){
		console.log(i)
	}
}
*/
let getCatSaying = function(max) {
	return  Math.floor(Math.random() * Math.floor(max))
}

let catSayings = ["...human...why you taking pictures of me?...","...the catnip made me do it...",
"...why does the red dot always get away..."]

for(let x = 0;x <=20; x++){
	if(x%2 !=1){
		console.log(catSayings[getCatSaying(3)])
		} else {
			console.log('Love ne, pet me! HSSSSS!')
		}


	}




console.log(getCatSaying(3))
