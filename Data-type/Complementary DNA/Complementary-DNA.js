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
    // let filterArrayA = stringToArray.filter(n => n === "A")
    //  filterArrayA.forEach(n => {
    //     newArray.push("T")
    // })
    // let filterArrayT = stringToArray.filter(n => n === "T")
    //  filterArrayT.forEach(n => {
    //     newArray.push("A")
    // })
    // let filterArrayC = stringToArray.filter(n => n === "C")
    //  filterArrayC.forEach(n => {
    //     newArray.push("G")
    // })
    // let filterArrayG = stringToArray.filter(n => n === "G")
    //  filterArrayG.forEach(n => {
    //     newArray.push("C")
    // })

    return newArray.join('')
}

console.log(DNA("ATAG "))