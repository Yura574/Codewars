const findSquares = num => {
    if(num%2 !== 0) {
        const a = String(Math.pow(Math.ceil(num / 2), 2))
        const b = String(Math.pow(Math.floor(num / 2), 2))
        return `${a}-${b}`
    } else {
        alert("только нечетное число")
    }

}

