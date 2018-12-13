for(let i = 1;i<=20;i++)
{
	console.log(i)
}
for(let i = 0;i<=200;i++)
{
	if(i%2==0)
		console.log(i)
}
for(let i = 0;i<20;i++)
{
	let stringArray = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]
	if(i%2==0)
	{
		console.log(stringArray[Math.floor(Math.random() * 2)])
	}
	else
		console.log("Love me, pet me! HSSSSSS!")
}
for(let i = 1;i<100;i++)
{
	let check1 = false
	let check2 = false
	if(i%3==0)
	{
		console.log("Fizz")
		check1 = true
	}
	if(i%5==0)
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
