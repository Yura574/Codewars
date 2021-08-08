function decToBin(d) {
    if (!Number.isSafeInteger(d) || d < 0) {
        throw new Error('v must be a non-negative integer');
    }
    if (d === 1) {
        return '1';
    }
    if (d === 0) {
        return '0';
    }
    return decToBin(Math.floor(d / 2)) + (d % 2);
}

console.log(decToBin(56))