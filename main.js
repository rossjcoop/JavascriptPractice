
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



function reverseString2(num){	
var n = num.split('').reverse('').join('');
return n
}

console.log(reverseString2('Hello world'))


