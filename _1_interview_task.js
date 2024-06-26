// Нужно написать функцию, которая принимает в качестве аргумента некую последова 
// -стоявшие рядом значения не повторяются 
// -последовательность сохраняется


// func("AAAABBBCCDAABBB") => ['A', 'B', 'C', 'D', 'A', 'B']
// func("ABBCcAD") => ['A', 'B', 'C', 'c', 'A', 'D']
// func([1,2,2,3,3]) => [1, 2, 3]

const func = (s) => {
    let value = null
    const res = s.split('')
    const arr = []
    
    for (let i = 0; i < res.length; i++) {
    if (res[i] !== value) {
    value = res[i]
    arr.push(value)
    }
    }
        return arr
    }
    

console.log(func('ABBCcAD'))