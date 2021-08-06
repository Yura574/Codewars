function cardMask(ca) {
    let card = ca.toString().split('')
    let cardSliceEnd = card.slice(-4)
    let cardSliceStart = card.slice(0, -4)
    let newArray = []
    cardSliceStart.forEach(n => {
        newArray.push('#');
    })


    return newArray.join('')+cardSliceEnd.join('')
}


console.log(cardMask("8298adsds726fd9"))