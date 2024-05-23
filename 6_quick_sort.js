// Быстрая сортировка О(т)

let array = [-2, 4, 3, -6, 2, 5, 19, 0, 32, -34, -5, 3, 9]

function quickSort (array) {
if (array.length <= 1) {
    return array
}

let pivotIndex = Math.floor(array.length / 2)
let pivot = array[pivotIndex]

let less = []
let greater = []

for (let i = 0; i <= array.length; i++) {
    if (i === pivotIndex) {
        continue
    }

    if (array[i] < pivot) {
        less.push(array[i])
    }

    if (array[i] > pivot) {
        greater.push(array[i])
    }
}
return [...quickSort(less), pivot, ...quickSort(greater)]
}

console.log(quickSort(array))