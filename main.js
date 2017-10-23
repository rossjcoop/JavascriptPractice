

///////////////////ROSS'S JAVASCRIPT PRACTICE SHEET! LETS GET SOME JOBS!!!!///////////////////

// Write a JavaScript function that reverses a number.
// Example x = 32243;
// Expected Output : 34223 

/////This is one way to reverse a string./////
function reverse(s) {
  var i = s.length,
      o = '';
  while (i > 0) {
    o += s.substring(i - 1, i);
    i--;
  }
  return o;
}

console.log(reverse('6837'))


///////This returns an actual number/////////////////////

function reverse2(num){	
var n = Number(num.toString().split('').reverse('').join(''));
return n
}

console.log(reverse2(32243))


// Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

let string = "nurses run"

function palindrome(string){
	//////I first create a new array and split the characters, then I filter out any whitespace, then join it back together. Then I create new variable that does the same thing, but reverses it. Use logic to compare.
	let divide = string.split('').filter(entry => entry.trim() != '').join('');
	let reverse = string.split('').filter(entry => entry.trim() != '').reverse('').join('');

	console.log("Initial string: ",divide)
	console.log("String in reverse: ",reverse)
	if(divide === reverse) {
		return true
	} else
		return false
}

console.log(palindrome(string))




// Write a JavaScript function which will take an array of numbers and find the lowest and greatest numbers, respectively.
// Sample array : [1,2,7,4,5]
// Expected Output : 1,7



let array = [1,2,7,4,5]
//////////////////////////Using built in math functions///////////////////
function lowAndHigh (array) {
	let largest = Math.max.apply(Math, array);
	let smallest = Math.min.apply(Math, array);
	return smallest + "," + largest 
}

/////////////////////////////Lets try with for loops///////////////////////

function findMax(array) {
	let max = 0;
	for (let i = 0; i < array.length; i++) {
    	if (array[i] > max) {
    		max = array[i];
    	}
	}	
	return max;
}

function findMin(array) {
	let min = array[0];
	for (let i = 0; i < array.length; i++) {
		if (array[i] < min) {
			min = array[i];
		}
	}
	return min;
}

console.log(lowAndHigh(array))
console.log(findMin(array) + "," + findMax(array))




// Write a JavaScript program to compute the sum and product of an array of integers.


function findSumProd(array) {

	//////Using array methods/////////////////////////////////////
	let sum = array.reduce((a, b) => a + b, 0)
	let product = array.reduce((a, b) => a * b, 1)

	return "Sum: "+ sum +" "+"Product: "+ product

}

function findSumProd2(array) {

	///////////using loops yay!///////////////////////////////////
	let sum = 0
	let product = 1

	for( i = 0; i < array.length; i ++){
		sum += array[i]
		product *= array[i]
	}

	return "Sum: "+ sum +" "+"Product: "+ product

}

console.log(findSumProd(array))
console.log(findSumProd2(array))



// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
// Example string : 'The quick brown fox' 
// Expected Output : 5




function vowelCount(string) {

	let vowels = string.split('').filter(item => item === "a" || item === "e" || item === "i" || item === "o" || item === "u")

	return vowels.length
}

console.log(vowelCount(string))

	













