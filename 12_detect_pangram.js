function isPangram(string){
    let array = string.toLowerCase().split("")
    let abz = "abcdefghijklmnoprstuvmxyz".split("")
    for (let i = 0; i < array.length; i++) {
        for (let n = 0; n < abz.length; n++) {
  if (array[i] === abz[n]) {
  abz.splice(n, 1)
  }
  }
  }
    if (abz.length === 0) {
  return true
  } 
    return false
  }

  console.log(isPangram('The quick brown fox jumps over the lazy dog'))