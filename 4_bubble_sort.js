// O(n^2)

let array = [-2, 4, 3, -6, 2, 5, 19, 0, 32, -34, -5, 3, 9]

function bubbleSort (array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) { 
             if (array[j+1] < array[j]) { // -34 < 32 = true
                 let tmp = array[j] // 32
                 array[j] = array[j+1] // 32 = -34
                 array[j+1] = tmp // -34 = 32
             }
        }
    }
    return array
}

console.log(bubbleSort(array))