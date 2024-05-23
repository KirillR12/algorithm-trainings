// o(n*n)
let a = 'ab'
let b = 'aabbccd'
let result = 0
let counter = 0

for (let i = 0; i < a.length; i++) {
    for (let n = 0; n < b.length; n++) {
    counter += 1 
       if (a[i] === b[n]) {
       result++
}
    }
}


// o(n)
console.log(result)
console.log(counter)

let a2 = 'ab'
let b2 = 'aabbccd'
let result2 = 0
let counter2 = 0

for (let i = 0; i < b2.length; i++) {
    counter2 += 1 
   if (a2.includes(b2[i])) {
          result2++
    }
}

console.log(result)
console.log(counter)