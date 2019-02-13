//Javascript practice part 2!


//The 5 ways to reverse a sting:



//Let's try with a loop first


function reverseStr1(str) {
	let reversed = ""
	for(i = str.length - 1; i >=0; i--) {
		reversed += str[i]
	}

	return reversed
}


console.log(reverseStr1("Ross"))





if([] == true){
	console.log(1);
} else {
	console.log(2);///weird, it is saying not true?!?
}

let x = null, y;

let z = ([] === true || [] == true || x===y && "hi"

console.log(z)



function reversal(str) {      ///////I was so wrong on this one, I thought too hard!! could have swore the spaces wouldn't have been kept
	return str.split('').reverse().join('')
}


console.log(reversal("Hello from Company"))




let someArr = [10,20,30,40]


for(let i = 0; i < someArr.length; i++) {        
	setTimeout(function(){
		console.log("Index " + i + " , element " + someArr[i])
	}, 3000);

}


someArr.forEach((item, index) => setTimeout(() => console.log("Index " + index + " , element " + item), 3000));