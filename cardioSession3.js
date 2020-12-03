const funtions = require("./main");

//Add Random Numbers of Arguments with Arrow Function
const addAll = (...rest) => {
  //Solution

  return rest.reduce((container, value) => {
    return container + value;
  }, 0);
};

//Add All Prime Numbers

//When Individual Passed as arguments
const sumPrime = (...rest) => {
  let sumCOntainer = 0;
  let divisorCount = 0;
  rest.forEach((val) => {
    for (let i = 1; i <= Math.abs(val); i++) {
      if (val % i === 0) {
        divisorCount += 1;
      }
    }
    if (divisorCount === 2) {
      sumCOntainer += val;
    }

    divisorCount = 0;
  });

  return sumCOntainer;
};

//For Primes Upto the given number

const calcPrimeSum = (num) => {
  let divisorCount = 0;
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    for (let j = 0; j <= i; j++) {
      if (i % j === 0) {
        divisorCount += 1;
      }
    }
    if (divisorCount === 2) {
      sum += i;
    }
    divisorCount = 0;
  }
  return sum;
};

//Two Function Solution

const primeSum = (value) => {

  let checkForPrime = (i) => {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        return false;
      }
    }
    return true;
  }

  let sum = 0;
  for (let i = 2; i <= value; i++) {
    if (checkForPrime(i)) {
      sum += i;
    }
  }

  return sum;
};

//Seek And Destroy

const seekAndDestroy = (values, ...rest) => {
    rest = [].concat(...rest)
    return values.filter(value =>  !rest.includes(value))  
}

//Sort by Height in a park with trees that cannot be moved

const sortByHeight= (row) => {
    const getTreeIndex = (row) => {
        let treeIndex = []
        row.forEach((value,index) =>  value === -1 ? treeIndex.push(index) : '')
        return treeIndex
    }
    const rowLength = row.length;
    const treePositions = getTreeIndex(row);

    row = row.filter(value => value != -1).sort()
    treePositions.forEach((value) => row.splice(value,0,-1))
   return row;
}

//Missing Letters

const missingLetter = (letters) => {
        //Solution 1 (Missing between initial and last)
        let allLetters = ("abcdefghijklmnopqrstuvwxyz").split('')
        allLetters.splice(0, allLetters.indexOf(letters[0]))
        letterRange = allLetters.splice(0, allLetters.indexOf(letters[letters.length -1 ]) +1)
    
        return letterRange.reduce((accumelator, letter) => {
            return accumelator + (!letters.includes(letter) ? letter: '')
        },'Missing: ')
    
        //Solution 2 (Single Char Missing)
        // let compare = value.charCodeAt(0)
        // let missing;
    
        // value.split('').map((char, i) => {
        //     if(value.charCodeAt(i) == compare) {
        //         ++compare;
        //     }else {
        //         missing = String.fromCharCode(compare)
        //     }
        // })
    
        // return missing
    }

    const evenOddSum = (numContainer) =>  {
        sumContainer = {
            OddSum:0,
            EvenSum:0
        }
        numContainer.forEach(value=> {
            if(value%2 === 0) {
                sumContainer.EvenSum += value
            }else {
                sumContainer.OddSum += value
            }
        })

        return sumContainer;
    }
    


const output = evenOddSum([1,2,3,4,5]);

console.log(output);
