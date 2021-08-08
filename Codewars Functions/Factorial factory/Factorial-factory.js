function factorial(x) {

    if (x === 0) {
        return 1;
    }
    if (x < 0) {
        return null
    }
    return x * factorial(x - 1);

}

console.log(factorial(5));