// function sumTriangularNumbers(n) {
//     let sum = 0
//     let sum1 = 0
//     let sum2 =0
//     for (let i = 0; i < n; i++) {
//         for (let k = 0; k < i; k++) {
//            sum1 = sum2+1
//         }
//         sum = sum + sum2
//
//     }
//     return sum2;
//
// }
function sumTriangularNums(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += (i * (i + 1)) / 2;
    }
    return sum;
}
console.log(sumTriangularNums(-4))