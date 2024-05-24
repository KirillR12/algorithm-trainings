// O(log(n))

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 21, 22, 34]
let counter = 0

function binarySearch (array, item) {
    let start = 0
    let end = array.length
    let middle 
    let found = false
    let position = -1

    while (found === false && start <= end) {
        counter += 1
        middle = Math.floor((start + end) / 2)

        if (array[middle] === item) {
            found = true
            position = middle
            return position
        }

        if (item < array[middle]) {
            end = middle - 1
        }

        else {
            start = middle + 1
      }
    }

    return position
}

// рекурсия

function binarySearchRecursion (array, item, start, end) {
    let middle = Math.floor((start + end) / 2)
    if (item === array[middle]) {
        return middle
    }
    if (item < array[middle]) {
        return binarySearchRecursion(array, item, start, middle - 1)
    } else {
        return binarySearchRecursion(array, item, middle + 1, end)
    }
}

console.log(binarySearchRecursion(array, 17, 0, array.length))