function solution(start, finish) {
    let count = 0
    let step = start
    if (finish === step) {
      return count
    }
      count += 1
      step += 1
    return solution(step, finish)
}

console.log(solution(2,4))