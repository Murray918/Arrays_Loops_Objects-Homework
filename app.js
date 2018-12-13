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