function stray(numbers) {
let strayNumber = numbers[0]
    if(strayNumber !== numbers[1] && strayNumber !== numbers[2]){
        return strayNumber
    }
    for (let i=1; i<numbers.length; i++){
        if (strayNumber !== numbers[i]){
            return numbers[i]
        }
    }

}

console.log(stray([3,3,1,3]))