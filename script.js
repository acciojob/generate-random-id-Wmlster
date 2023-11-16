function makeid(l) {
  // write your code here

	let s="";

	while(l--)
		{
			s+='a';
		}

	return s;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
