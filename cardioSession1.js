//Cardio session 1 6 Problems

//Reverse The String
const reverseString = (str) => {
    //Solution 1
   // return str.split(' ').reverse().join(' ')

   //Solution 2
//    let revString = ''

//    for (let i = 0; i <=  (str.length -1) ; i++) {
//         revString = str[i] + revString;
//    }
//    return revString

//Solution 3

// let revString ='';

// for(let char of str) {
//     revString = char + revString
// }

// return revString;

//SOlution 4

// let revString = '';
// str.split('').forEach(char => {
//     revString = char + revString
// })

// return revString;

//Solution 5

return str.split('').reduce((revString, char) => {
    return char+ revString;
}, '')

} 

//CHack if Palindrome

const isPalindrome = (str) => {
    
    // return str.toLowerCase() == str.toLowerCase().split('').reverse().join('')

    //////////////////////////

    // return str.toLowerCase() === str.toLowerCase().split('').reduce((revString,char) => {
    //     return char + revString
    // },'')

    //////////////

    for (i=0; i<str.length/2; i++) {
      if (str[i]!== str[str.length-i-1]) {
          return false;
      }
  }

  return true
}

//Reverse Int
const reverseInt = num => {
    return parseInt(num.toString().split('').reverse().join('')) * Math.sign(num);
}

///////////////////////

//Capitalize First Letter of Word

const capLetter = str => {

    //Solution 1
    // str = str.replace(/\s{2,}/g, ' ').trim().toLowerCase()
    // upperWOrd =''
    // for(i = 0; i <= str.length -1 ; i ++) {
    //     if(i === 0 || (str[i-1] == ' ')) {
    //         upperWOrd += str[i].toUpperCase() 
    //     }else {
    //         upperWOrd += str[i]
    //     }
    // }
    // return upperWOrd;

    //////////////////

    //Solution 2

    // strArray = str.trim().toLowerCase().split(' ')
    
    // for(let i =0; i <= strArray.length -1; i++)
    //     strArray[i] = strArray[i].substring(0,1).toUpperCase() + strArray[i].substring(1)
    // return strArray.join(' ')

    //Solution 3 (Map High Order Function)

    // return str
    //     .replace(/\s{2,}/g, ' ')
    //     .trim()
    //     .toLowerCase()
    //     .split(' ')
    //     .map(word => {
    //         return word[0].toUpperCase() + word.substr(1);
    //     })
    //     .join(' ')

    //Solution 4 (Using regex)

    return str.trim().replace(/\s{2,}/g, ' ').replace(/\b[a-z]/gi, (char=> {
        return char.toUpperCase()
    }))
}

//Max Characters

const maxCharacters = (word) => {

    //Solution 1 (Doesn't calculate equal Max Characters properly)
    // maxChar = {
    //     word: '',
    //     count: 0
    // }
    // count= 1;
    // word = word.replace(/\s/g, '').toLowerCase().split('').sort()
    // for(let i =0; i <= word.length-1; i++){
    //     if(word[i] === word[i+1]) {
    //         count+=1
    //     if(count >= maxChar.count){
    //         maxChar.word = word[i]
    //         maxChar.count = count
    //     }

    // }else {
    //     count = 1
    // }
    // }

    // return maxChar;

    //Solution 2
    

    const charMap = {}
    let maxNum = 0
    let maxChar = 

    word.split('').forEach(char => {
    
        if(charMap[char]){
            charMap[char]++;
        }else {
            charMap[char] = 1;
        }
    });

    for(let char in charMap) {
        if(charMap[char] > maxNum) {
            maxNum = charMap[char];
            maxChar = char
        }
    }   

    return maxChar
}

//Fizz Buzz FizzBUzz

const fizzBuzz = () => {
    toPrint = []
    let divThree = 0
    let divFive = 0
    for(let i =1; i <= 100; i++ ) {
        divThree = !Boolean(i%3)
        divFive = !Boolean(i%5)

        if(divThree && divFive)
            toPrint.push(i + ' -> FizzBuzz')
        if(divThree && !divFive)
            toPrint.push(i + ' -> Fizz')
        if(!divThree && divFive)
            toPrint.push(i + ' -> Buzz')
        if(!divThree && !divFive)
            toPrint.push(i)

        
    }

    return toPrint
}

const output = fizzBuzz()

console.log(output)