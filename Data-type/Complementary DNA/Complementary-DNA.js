function  DNA (dna) {
    let newArray = []
    let stringToArray = dna.split('')
    stringToArray.forEach(n => {
        if(n ==="A"){
            return newArray.push("T")
        }
        if(n ==="T"){
            return newArray.push("A")
        }
        if(n ==="G"){
            return newArray.push("C")
        }
        if(n ==="C"){
            return newArray.push("G")
        }

    })

    return newArray.join('')
}

console.log(DNA("ATAG "))