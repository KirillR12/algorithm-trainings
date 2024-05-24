const graph = {
    a: ['b', 'c'],
    b: ['f'],
    c: ['d', 'e'],
    d: ['f'],
    e: ['f'],
    f: ['g']
}

function breadthSearch (graph, start, end) {
    let query = []
    query.push(start)

    while (query.length > 0) {
        let current = query.shift()

        if (!graph[current]) {
            graph[current] = []
        }
        if (graph[current].includes(end)) {
            return true
        } else {
            query = [...query, ...graph[current]]
        }
    }
    return false
}

console.log(breadthSearch(graph, 'a', 'l'))