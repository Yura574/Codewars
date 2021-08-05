function maxRedigit(num) {
    if (num <= 0) {
        return null
    } else {
        let splitNum = Number(String(num).split("").sort().reverse().join(''))
        return splitNum
    }
}

console.log(maxRedigit(6661129999))