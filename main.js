

///////////////////ROSS'S JAVASCRIPT PRACTICE SHEET! LETS GET SOME JOBS!!!!///////////////////

// Write a JavaScript function that reverses a number.
// Example x = 32243;
// Expected Output : 34223 

/////This is one way to reverse a string./////
function reverse(string) {
  let i = string.length,
      o = '';
  while (i > 0) {
    o += string.substring(i - 1, i);
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





// Write a function that takes two strings and determines whether they're anagrams or not.



function isAnagram(s1, s2) {
  let string1array = s1.toLowerCase().split('').sort().join()
  let string2array = s2.toLowerCase().split('').sort().join()
  
  if(string1array == string2array){
    return true
  } else {
    return false
  }
   
}

console.log(isAnagram('Dave Barry', 'Ray Adverb'))






function removeSmallest(arr) {
  let lowest = arr[0]
  for(let i = 0; i < arr.length; i ++) {
    if(arr[i] < lowest) {
      lowest = arr[i]
    }
  }
  let lowestIndex = arr.findIndex(item => item == lowest)
  arr.splice(lowestIndex, 1)
   
  return arr
    
}


console.log(removeSmallest([4, 1, 2, 10, 15]))




// Create a function that takes a string and returns the middle character(s). If the word's length is odd, return the middle character. If the word's length is even, return the middle two characters.


function getMiddle(str) {
  let middle = str.split('')
  let middleChar = middle.length / 2


  if(Number.isInteger(middleChar)) {
  	let middleStr = str.charAt(middleChar - 1) + str.charAt(middleChar)
  	return middleStr
  
  } else {
  	middleChar = Math.floor(middleChar)
  	return str.charAt(middleChar)
  }

}

console.log(getMiddle('hello'))
	

//Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.


function lessThanOrEqualToZero(num) {

	if(num <= 0) {
		return true
	} else {
		return false
	}
	
}

console.log(lessThanOrEqualToZero(1))


//Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.


function getAbsSum(arr){
	let sum = 0
	for(let i = 0; i < arr.length; i++) {
		sum += Math.abs(arr[i])
	}
	return sum 
}

console.log(getAbsSum([1, -2, 3, 4]))



//Create a function that, given 2 dates, returns the names of the months that are present between them (inclusive).


const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function monthsInterval(dateStart, dateEnd) {

	if (dateStart > dateEnd) { //if starting date comes after ending date, reverse them.
		[dateStart, dateEnd] = [dateEnd, dateStart];
	}

	const start = Date.parse(dateStart)
	const end = Date.parse(dateEnd)
	
	
	if ((end - start) >= 31536000000) { //if over a year between dates, just return entire array
		return monthNames
	}

	else {

		let indexStart = dateStart.getMonth()
		let indexEnd = dateEnd.getMonth()

		if (indexStart <= indexEnd) { //inner slice
			let months = monthNames.slice(indexStart, (indexEnd + 1))
			return months			
		}

		else { //outer slice
			let months = monthNames.slice(0, (indexEnd + 1)).concat(monthNames.slice(indexStart, 12))
			return months
		}
	}
};


var x = new Date(2018, 0, 1);
var y = new Date(2017, 11, 1);


console.log(monthsInterval(x, y))




//////LEFT OVER OLD CODE FROM ABOVE PROBLEM/////////////////////////////////////////////////


	///code to start at a different index and loop through entire array


		//version taken from Stack Overflow:

		// var myArry = ["cool", "gnarly", "rad", "farout", "awesome"];
		// var offset = 3;
		// var newArray = []
		// for( var i=0; i < myArry.length; i++) {
		//     var pointer = (i + offset) % myArry.length;
		//     newArray.push(myArry[pointer])   
		// }

		///version for above:

		// for(let i = 0; i < monthNames.length; i++) {
		//     let pointer = (i + indexStart) % myArry.length;
		//     newArray.push(myArry[pointer])   
		// }

		//Idea I had to make loops from one index to another:
		
		//for(let i = 0; i < indexStart; i++) {
  		//omittedMonths.push(monthNames[i])
  		//}

		//for(let i = indexEnd; i < 12; i++) {
  		//omittedMonths.push(monthNames[i]) 	
  		//} 


		//code to filter an array from another array
		// let months = monthNames.filter(month => !omittedMonths.includes(month));


		//Tried Splice, then realized it was modifying the original array. Shit.

		// let omit = (indexStart - (indexEnd + 1))
		// console.log("Splice count:", omit)
		// monthNames.splice((indexEnd + 1), omit)



//Create a function that accepts a string (of a persons first and last name) and returns a string with the first and last name swapped.


function nameShuffle(str) {

	let swap = str.split(' ').reverse().join(' ')
	return swap
  
}

console.log(nameShuffle("Donald Trump"))


//Create a function that takes a string and returns a string with its letters in alphabetical order.

function AlphabetSoup(str) {

	let atoZ = str.split('').sort().join('')
	return atoZ 
}

console.log(AlphabetSoup("javascript"))



//Create a function that takes an array of numbers. Return the largest number in the array.

function findLargestNum(arr) {
  return Math.max.apply(Math, arr);
}
//even simplier:
// return Math.max(...arr);

console.log(findLargestNum([1, 6, 456, 8]))


//Create a function that takes two strings and returns true if the first argument ends with the 2nd argument; otherewise return false .

//I guess the tests were all in lowercase, but just in case, lets make the params lowercase. -RC

function checkEnding(str1, str2) {
	return str1.toLowerCase().endsWith(str2.toLowerCase()) 
}

console.log(checkEnding("basic", "Sic"))


//Create a function that takes an array of numbers and returns the smallest number in the set.

function findSmallestNum(arr) {
	return Math.min(...arr);
  
}

console.log(findSmallestNum([3, 5, 7, 8]))


//Create a function that takes an array of strings. Return all words in the array that are exactly four letters.

function find4Array(arr) {
	return arr.filter(item => item.length == 4)
}

console.log(find4Array(["four", "five", "six"]))




//Create a function that returns all values in an array that aren't' odd.

function noOdds(arr) {
  return arr.filter(num => num % 2 === 0)
}

console.log(noOdds([2, 3, 4, 5]))

//Create a function that takes a string as its argument and returns the string in reversed order.

function reverse(str) {
  return str.split('').reverse().join('')
}


console.log(reverse("Hello world!"))


//Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.

function isEvenOrOdd(num) {
   if(num % 2 == 0){
    return "even"
  } else {
    return "odd"
  }

 // const isEvenOrOdd = num => num % 2 === 0 ? 'even' : 'odd'////I like the ES6 way but won't work.
}

console.log(isEvenOrOdd(8))



//Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

function minMax(arr) {
	return [Math.min(...arr), Math.max(...arr)]
}

console.log(minMax([1, 5, 7, 9]))


//Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.  For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

function addUp(num) {
	
	//return (num * (num + 1))/2; ///better way
	var n = 0;
	var x = 0;

	while (n < num) {
  		n++;
  		x += n;
	}

	return x
  
}

console.log(addUp(600))

//Create a function that takes an array of non-negative numbers and strings and returns a new array without the strings.


function filterArray(arr) {
  return arr.filter(item => typeof item === "number")
}

console.log(filterArray([1, 2, 5, "butter", 8, "cheese"]))


//Create a function that takes a string and returns the word count. The string will be a sentence.

function countWords(str){
	return str.split(' ').length
}

console.log(countWords("Where in the world is Carmen San Diego?"))



///Create a function that takes a string as an argument. Return a new string with all vowels removed.

function silenceTrump(str) {
	// return str.split(' ').map(item => item.replace(/[a || e || i || o || u || A || E || I || O || U]/g, '')).join(' ')///my way

	return str.replace(/[aeiou]/ig, '');//this way much better.
}

console.log(silenceTrump("Make America Great Again"))


//Given a number n, write a function that returns PI to n decimal places.

function myPi(n) {
	let factor = Math.pow(10, n)
	return Math.round(Math.PI * factor) / factor


	//return Number(Math.PI.toFixed(n)); //better solution
}

console.log(myPi(9))


//Create a function that takes an array of numbers and returns the following statistics: Minimum Value, Maximum Value, Sequence Length, Average Value

function minMaxLengthAverage(arr) {
	let min = Math.min(...arr)
	let max = Math.max(...arr)
	let length = arr.length
	let avg = arr.reduce((a, b) => a + b, 0) / arr.length

	return [min, max, length, avg]
}

console.log(minMaxLengthAverage([5, 1899, 4443, 2230549, 9, 29]))


//Create a function that takes a string and returns the number (count) of vowels contained within it.

function countVowels(str) {
  return str.match(/[aeiou]/ig).length
}


//return str.split('').filter(x => 'aeiouAEIOU'.includes(x)).length;//another cool way using filter


console.log(countVowels("Where in the world is Carmen San Diego?"))



//Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest).

function sortNumsAscending(arr) {
//   if(arr == null) {
//     return []
//   } else {
//   return arr.sort((a, b) => a - b)
//  }
// }

return arr ? arr.sort((a, b) => a - b) : [] //This way is cool
}
console.log(sortNumsAscending(undefined))




//Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.


function findLargestNums(arr) {
  return arr.map(a => Math.max(...a))
}

console.log(findLargestNums([[1, 5, 34], [456, 2, 1004], [2458, 456, 2, 586]]))



//Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.

function XO(str) {
	let x = 0
	let o = 0
	let arr = str.toLowerCase().match(/[xo]/ig)
 
	arr ? arr.forEach(i => i === "x" ? x++ : o++) : arr == null //still proud of this. haha

	if(x == o) {
		return true
	} else {
		return false
	}

	//top solution

	//let x = str.toLowerCase().split('').filter(x => x === 'x').length;
  	//let o = str.toLowerCase().split('').filter(x => x === 'o').length;
  	//return x === o;////so simple, it either evaluates true or false.

}
console.log(XO("The boxes of foxes ate Oxes"))


//Create a function that accepts a string of space separated numbers and returns the highest and lowest number (as a string).


function highLow(str) {
	return (Math.max(...str.split(' '))) + " " + (Math.min(...str.split(' ')))  
}

///var nums = str.split(' ');
// return `${Math.max(...nums)} ${Math.min(...nums)}`; //with the template literals, works nicely.



console.log(highLow("15 256 56 34 1"))


//Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa!

//Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.

function timeForMilkAndCookies(date) {
	let month = date.getMonth()
	let day = date.getDay()

	if(month == 11 && day == 24) {
		return true
	} else {
		return false
	}  
}

//return date.getMonth() === 11 && date.getDate() === 24; so fucking simple. Damn it. It will either be true or false. Hot beans.

console.log(timeForMilkAndCookies(new Date( 2013, 11, 24 )))




//Create a function that takes a string and returns a string in which each character is repeated once.

function doubleChar(str) {
	return str.split('').map(i => (i+i)).join('') 
}

console.log(doubleChar("Hello World"))

//Create a function that takes an array of names and returns an array with the first letter capitalized.


function capMe(arr) {
	return arr.map(i => i.substr(0, 1).toUpperCase() + i.substr(1, i.length).toLowerCase())
}

console.log(capMe(["Barry", "john", "ROSS"]))



//Write a function that takes four string arguments. You will be comparing the first string to the three next strings. Verify if the first string starts with the second string, includes the third string, and ends with the fourth string. If the first string passes all checks, return the string "My head, body, and tail.", otherwise, return "Incomplete.".



function verifySubstrs(mainStr, head, body, tail) {
	if(mainStr.startsWith(head) && mainStr.includes(body) && mainStr.endsWith(tail)) {
		return "My head, body, and tail."
	} else {
		return "Incomplete."
	}

	//return mainStr.startsWith(head) && mainStr.includes(body) && mainStr.endsWith(tail) ? "My head, body, and tail." : "Incomplete.";//better solution by smarter people than me.
}
console.log(verifySubstrs("Hello my world", "Hello", "y", "world"))


//Create a function that takes two numbers as arguments and return their sum.

function addition(a, b) {
	return a + b

	//const addition = (a, b) => a + b; 
}

//Create a function that takes an array of numbers and returns the mean average (fixed to two decimal places).

function mean(arr) {
	return Number((arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(2)) 
}


//Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).

function removeDups(arr) {
	// return arr.filter((v, i, a) => a.indexOf(v) === i) 
	return [...new Set(arr)] //haha!
}

console.log(removeDups([1, "Ken", "Ken", "Ryu", 2, 2]))



//Create a function that returns an array containing subarrays, each of a certain number of items, all set to either a string or an integer.

//x = how many subarrays to return
//z = the item in the array (either a string or number)
//y = how many times the item occurs in the array


// function matrix(x, y, z) {
// 	let subArray = []
// 	let count1 = 0
// 	while(count1 = y) {
// 		count1 ++
// 		subArray.push(z)
// 	}
// 	let returnArray = []
// 	let count2 = 0
// 	while(count2 = x) {
// 		count2 ++
// 		returnArray.push(subArray)
// 	}
// 	return returnArray
// }

// console.log(matrix(2, 5, "Ross"))


///input 109 points
//total games 82

//Las Vegas Golden Knights have finished their inaugural season in the NHL with 109 points (5th in the league). Given that each win is worth 2 points (2 points if they win in regulation time or 1 point for tie plus 1 point for overtime/shootout win), a loss is 0 points and an end of regulation tie is 1 point, print out all combiniation of W-L-OT, ordered DESC by W, that the Golden Knights could have finished the season with 109 points.



//I could, for 82 times, loop through



///Using a random number between 1 and 3, generate a many combinations adding to columns
// function possibleOutcomes(input){

// }

// let wins = 0
// let losses = 0
// let ties = 0
// let gameResults = []
// let totalGames = 82
// let totalPoints = (wins * 2) + losses + ties


// for (let i = 0; i < totalGames; i++) {
// 	var gameResult = Math.floor(Math.random() * Math.floor(3))

// 	if (gameResult == 0) {
// 		losses += 1
// 	} else if (gameResult == 1) {
// 		ties += 1
// 	} else {
// 		wins += 1
// 	}
// }




// console.log(wins)
// console.log(losses)
// console.log(ties)
// console.log(totalPoints)





//Basically given a sum of 109, how many cominations of 3 numbers equals 109

///wins array
///losses array
///ties array


// a + b + c = 109



// Create a function that takes an array and a string as arguments and return the index of the string.

function find_index(arr, str) {
	return arr.indexOf(str)	
}

//OR

console.log(find_index(['Ross', 'Cooper'], 'Ross'))


function find_index2(arr, str){
for (let i = 0; i < arr.length; i++) {
		if (lst[i] === str) {
			return i;
		}
	}
}

//OR

// const find_index = (arr, str) => arr.findIndex(val => val === str); kinda like this too



//Create a function to multiply all values in an array by the amount of values in that array.


function MultiplyByLength(arr) {

	let newArr = []
	for(let i = 0; i < arr.length; i++) {
		newArr.push(arr[i] * arr.length)
	}	

	return newArr

///////////////////////OR/////////////////////////

	// return arr.map(item => item * arr.length)
}

console.log(MultiplyByLength([5, 7, 9, 3]))




//Your task is to drive your car from 1 to 60 kilometers per hour by printing a pattern. A hyphen represents the speed of cars. One hyphen is counted as 1 kph.


function Go(num) {
	let arr = []
	for(let i = 0; i < num; i++) {
		arr.push("-")
	}

	return arr.join('')

//////////////////////OR/////////////////////////

	// return "-".repeat(num);

//////////////////////OR /////////////////////////

	// return Array(num).fill('-').join(''); ////This is what I was trying to do
}



//Create a function that takes a character and a string and returns the number of times that character is found in the given string.

function charCount(myChar, str) {

	return str.split('').filter(item => item == myChar).length
	
}


//Create a function that reverses a boolean value and returns the string "boolean expected" if another variable type is given.


// function reverse(bool) {

// 	if(bool === true) {
// 		return false
// 	} else if(bool === false) {
// 		return true
// 	} else {
// 		return "boolean expected"   ///my lame answer
// }
// }


////////////////////////OR/////////////////////////////

const reversal = bool => typeof bool === 'boolean' ? !bool : 'boolean expected'; ///LOVE LOVE this one.
	


console.log(reversal(14))

//Create a function that takes a number as an argument, increments the number by +1 and returns the result.

function addition(num) {
	return ++num
}

console.log(addition(2))

//Create a function that takes two arguments (item, times). The first argument (item) is the item that needs repeating while the second argument (times) is the number of times the item is to be repeated. Return the result in an array.

function repeat(item, times) {
	let arr = []
	for (var i = 0; i < times; i++) {
		arr.push(item)
	}
	return arr	
};

console.log(repeat("Ross", 5))



//Create a function that takes a number (from 1 to 12) and return its corresponding month name as a string.

function month_name(num) {
	let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",]
	return months[--num]
}


console.log(month_name(1))



//Create a function that takes a base number and an exponent number and returns the calculation.

function calculateExponent(num, exp) {
	return num ** exp
	//or Math.pow(num, exp)
}

console.log(calculateExponent(3, 2))

//Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.

// function comp(str1, str2) {

	
// }

const comp = (str1, str2) => str1.split('').length == str2.split('').length ? true : false;


console.log(comp('Ross', 'Cross'))


//Create a function that takes an array as an argument and returns true or false depending on whether the average of all elements in the array is a whole number or not.


const isAvgWhole = arr => Number.isInteger(arr.reduce((a, b) => a + b)/arr.length)


console.log(isAvgWhole([4, 4, 4, 4]))


//Create a function that takes a number as an argument and returns the amount of digits it has.

function findDigitAmount(num) {
	return num.toString().length
}

console.log(findDigitAmount(14568))



//Create a function that: - Takes a number, a string, and an array as parameters (in that order) - Adds up points based on how many times the number or string is in the array - For example: - If the number is in the array x times, then that is x points - If the string is in the array y times, then that is y+1 points - Returns total number of points calculated

// function stretchTruth(num,str,arr) {
// 	// let total = 0
// 	// typeof str === 'string' ? total++ : !total



// }	// arr.forEach(item => item === num || str ? total++ : !total)

const stretchTruth = (num, str, arr) => (arr.reduce((a, c) => c === num || c === str ? ++a : a, 0)) + (typeof str === 'string' ? 1 : 0)



console.log(stretchTruth(5, '5', [5, '5', 5, 5, 6, '5']))



//Create a function that takes an array of strings and return an array, sorted from shortest to longest.


function sortByLength(arr) {
	return arr.sort((a, b) => a.length - b.length)

//nested loop
// for (let i=0; i<arr.length;i++){
// 		for (let j=0; j<arr.length-1;j++){
			
			
// 			if (arr[j].length>arr[j+1].length)
// 				{
// 					var x = arr[j+1];
// 					arr[j+1]=arr[j];
// 					arr[j]=x;
					
					
// 				}
// 		}
// 	}
// 	return arr
}

console.log(sortByLength(['Ross', 'Cooper']))


//Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555).


function formatPhoneNumber(numbers) {
	let area = numbers.slice(0,3).join('').toString()
	let numb = numbers.slice(3)
	numb.splice(3, 0, '-')
	return "(" + area + ") " + numb.join('')
}

// let arr = "(XXX) XXX-XXXX".split(''); ///These two are my favorite
//   numbers.forEach(n => {
//     arr[arr.indexOf('X')] = n;
//   });
//   return arr.join('');


// return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');



//return `(${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}${n[8]}${n[9]}`; ///then again, I like this one for it's simplicity.

console.log(formatPhoneNumber([7, 0, 2, 2, 8, 3, 7, 8, 9, 1]))


// Create a function that takes an integer and returns the factorial of that integer. That is, the integer multiplied by all positive lower integers.


function factorial(int) {
	if(int < 0) {
		return -1;
	} else if(int == 0) {
		return 1;
	} else {
		return (int * factorial(int - 1));
	}

	// var t = 1;
 //  	for(var i = 1; i <= int; i++){ //the method I was trying to achieve
 //    	t *= i;
 //    }
 //    return t

 // const factorial = num => num === 0 ? 1 : num * factorial(num - 1); //love this answer
}



console.log(factorial(13));


//Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.

function missingNums(arr) {
	// return arr.sort((a, b) => a - b).find((x, i) => arr[i + 1] - x > 1) + 1 doesn't work if missing number is at the beginning or end.
	return ((arr.length + 1) * (arr.length + 2) / 2) - arr.reduce((a,c) => a + c) ///this works, but probably wouldn't work if there are duplicates. Could create a new Set to remove dupes then it would completely work.

	// for (let i = 1; i <= arr.length + 1; i++) {
 //    if (arr.indexOf(i) === -1) return i; ///This method is cool as well using the index number to find if that number exists. Personally, I kind of like the math way.
  }

console.log(missingNums([1, 6, 9, 10, 2, 3, 7, 4, 8])) //missing 5 for test



//Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not. A number is symmetrical when it is the same as its reverse.

function isSymmetrical(num) {
	return num.toString().split('').reverse().join('') == num ? true : false
}


console.log(isSymmetrical(488))



