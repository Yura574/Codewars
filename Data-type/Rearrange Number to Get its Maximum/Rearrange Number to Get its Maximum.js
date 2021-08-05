function maxRedigit(num) {
    if (num > 99 && num < 1000) {
        return Number(String(num).split("").sort().reverse().join(''))
    } else {
        return null
    }
}

console.log(maxRedigit(1000))