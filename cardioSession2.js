const chunkArray = (arr, len) => {
    const chunkedArr = []
    arr.forEach(val => {
        const last = chunkedArr[chunkedArr.length - 1]

        if(!last || last.length === len) {

            chunkedArr.push([val])

        }else{
            last.push(val)
        }

    
    });
    return chunkedArr
}

console.log(chunkArray([1,2,3,4,5,6,7,8,9], 2));


const flattenArray = (array) => {
    // return array.reduce((a,b) => {
    //     return a.concat(b)
    // })

    //Solution 2
    // return [].concat.apply([], array)

    //Solution 3
    return  [].concat(...array);
}

const isAnagram = (str1, str2) => {
    return formatStr(str1) === formatStr(str2)
}

function formatStr(str) {
 return str
     .replace(/[^\w]/g, '')
     .toLowerCase()
     .split('')
     .sort()
     .join('')
}

const letterChange = (str) => {
    let newStr = str.toLowerCase().replace(/[a-z]/gi, (char => {
        if(char === 'z' || char === 'Z') {
            return 'a'
        }else {
            return String.fromCharCode(char.charCodeAt() + 1);
        }
    }));

    return newStr.replace(/a|e|i|o|u/gi, (vowel => {
        return vowel.toUpperCase();
    }))
}

console.log(letterChange('Dirty Roomz'))

// console.log(isAnagram('Dormitory', 'Dirty Room &#$@'));