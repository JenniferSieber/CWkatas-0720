// 6kyu
// KATA 1 //
function digitalRoot(n) {
  return (n - 1) % 9 + 1;
}

console.log(digitalRoot(16));
console.log(digitalRoot(942));
console.log(digitalRoot(0));
console.log(digitalRoot(276922));

// KATA 2 
// https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript
function findMissingLetter(arr) {
  for (let i = 0; i < arr.length; i++) {
    const currentCharCode = arr[i].charCodeAt(0);
    const nextCharCode = arr[i + 1].charCodeAt(0);

    if (nextCharCode - currentCharCode > 1) {
      return String.fromCharCode(currentCharCode + 1);
    }
  }
  return null;
}

console.log(findMissingLetter(['a','b','c','d','f']));
console.log(findMissingLetter(['O','Q','R','S']));

// KATA 3
// https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript
function countSmileys(arr) {
  return arr.filter(x => /^[:;][-~][)D]$/.test(x)).length;
}

console.log(countSmileys([]));
console.log(countSmileys([':D',':~)',';~D',':)']));
console.log(countSmileys([':)',':(',':D',':O',':;']));
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));

// KATA 4
// https://www.codewars.com/kata/5b4e779c578c6a898e0005c5/train/javascript
function drawStairs(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result[i] = `${' '.repeat(i)}I`;
  }
  return result.join('\n');
}

console.log(drawStairs(1));
console.log(drawStairs(3));
console.log(drawStairs(5));

// KATA 5
// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript
function sortArray(arr) {
  let odd = arr.filter(num => num % 2 !== 0).sort((a,b) => a-b);
  return arr.map(num => num % 2 === 0 ? num : odd.shift());
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));