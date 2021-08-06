// var Calculator = {
//     average:
// };

function sum() {
    let s = 0
    if (arguments.length === 0) return 0;
    for (let i = 0; i < arguments.length; i++) s += arguments[i];
    return s / arguments.length
}

console.log(sum(4, 9, 2))