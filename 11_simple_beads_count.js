// O (1)

function countRedBeads(n) {
    if (n < 2) {
  return 0
  }
    return (n - 1) * 2
  }

  console.log(countRedBeads(2))