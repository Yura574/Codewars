function bubbleSortOnce(a) {
    let b = [...a]
    for (let j = 0; j < b.length - 1; j++) {
        if (b[j] > b[j + 1]) {
            let temp = b[j];
            b[j] = b[j + 1];
            b[j + 1] = temp;
        }
    }
    return b
}

console.log(bubbleSortOnce([7, 5, 1, 3, 1, 4, 9, 6, 8]))