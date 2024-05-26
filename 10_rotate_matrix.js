// O(n^2)

function rotateMatrix(array) {
    let newArray = []

for (let i = 0; i < array[0].length; i++) {
newArray.push([])
}

for (let q = 0; q < array.length; q++) {
let j = array[0].length - 1
let n = 0

while (n <= newArray.length - 1) {
newArray[n].push(array[q][j])
j -= 1
n += 1
}
}
return newArray
}

const matrix = [[1, 2, 4], [2, 3, -3]]

console.log(rotateMatrix(matrix))