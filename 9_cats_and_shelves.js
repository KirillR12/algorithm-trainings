function solution(start, finish) {
    let count = 0
    while (start <= finish) {

        if (start + 1 <= finish && start + 3 > finish) {
          start += 1 
          count += 1
        }

        if (start + 3 <= finish) {
          start += 3
          count += 1
        }

        if (start === finish) {
           return count
        }
    }

}

console.log(solution(2,4))