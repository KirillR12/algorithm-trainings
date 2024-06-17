// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers. The function should also return "Even" or "Odd" when accessing a value at an integer index.

// For example:

// evenOrOdd(2); //'Even'
// evenOrOdd[2]; //'Even'
// evenOrOdd(7); //'Odd'
// evenOrOdd[7]; //'Odd'

const target = function(n) {
return n % 2 === 0 ? "Even" : "Odd"
}

const handler = {
  get(target, props) {
    return target(props)
  }
}

const evenOrOdd = new Proxy(target, handler)

console.log(handler[32])