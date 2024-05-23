// O(n^2)

let array = [-2, 4, 3, -6, 2, 5, 19, 0, 32, -34, -5, 3, 9]
let counter = 0 

function sortSelection (array) {
    for (let i = 0; i < array.length; i++) {
        let indexMin = i // 4 => 3
        for (let j = i+1; j < array.length; j++) { 
             if (array[j] < array[indexMin]) {
                indexMin = j
             }
        }
        let tmp = array[i]
        array[i] = array[indexMin]
        array[indexMin] = tmp
    }
    return array
}

console.log(sortArray(array))