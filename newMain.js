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

let z = ([] === true || [] == true || x===y && "hi") ///without parentheses it doesn't work as I thought. 

console.log(z)



function reversal(str) {      ///////I was so wrong on this one, I thought too hard!! could have swore the spaces wouldn't have been kept
	return str.split('').reverse().join('')
}


console.log(reversal("Hello from Company"))




let someArr = [10,20,30,40]


// for(let i = 0; i < someArr.length; i++) {        
// 	setTimeout(function(){
// 		console.log("Index " + i + " , element " + someArr[i])
// 	}, 3000);

// }


// someArr.forEach((item, index) => setTimeout(() => console.log("Index " + index + " , element " + item), 3000));





let stockPrices = [12, 3, 5, 8, 4, 1, 10, 7]

//What I need to do is get the net result of each price and sell at each price afterward to find the worse index and best index so


//So let's start with price of 12 and you have index 0. If you sold in the next result you would be -9, next, -7, -4, -8, -11, -2, -5. Highest result -2, index 6
//Next, (3) +2, +5, +1, -2, +7, +4 Highest result +7 index 6
//Next, (5) +3, -1, -4, +5, +2 Highest result +5 index 6
//Next, (8) -4, -7, +2, -1 highest result +2 index 6
//Next, (4) -3, +6, +3 highest result +6 index 6
//Next, (1) +9, +6 highest result +9 index 6
//Next, (10) -3, highest result -3 index 7
//Last, (7) highest result 0 index 7


function bestStockPrice(arr) {
	
	let scenarios = [];
	arr.forEach(findScenarios);

	function findScenarios(element, index, array) {
		let startingPrice = element;
		let startingIndex = index;
		let highestPrice = Math.max.apply(Math, slicer(array, index));
		let highestIndex = array.findIndex(item => item === highestPrice);
		let netResult = highestPrice - element;
		
		scenarios.push({startingIndex, startingPrice, highestIndex, highestPrice, netResult})

		// console.log(element, array)
	//So, we have successfully figured out the highest price possible on an array on a given staring index, next step will be to subtract the highest price, from the starting price so we have the net result possible.

	//After we run through each item in the array, we can then compare to see at which starting price is best to yield the highest result and we will have all the info of indecies available!!
		

		function slicer(arr, index) { ///I need this logic incase we are at the end of the array.
			if(index === (arr.length - 1)){
				return [arr[index]];
			} else {
				return arr.slice(index + 1);
			}
		}
	}

	

	function findBestScenario(arr) {
		let bestScenario = arr.find(item => item.netResult === Math.max.apply(Math, arr.map(item => item.netResult)));

		return "You should buy at $" + bestScenario.startingPrice + " at index " + bestScenario.startingIndex + " to net a gain of $" + bestScenario.netResult + " when you sell at $" + bestScenario.highestPrice + " at index " + bestScenario.highestIndex + "."
	}




	return findBestScenario(scenarios)
}

console.log(bestStockPrice(stockPrices))
