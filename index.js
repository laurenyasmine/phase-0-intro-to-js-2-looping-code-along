// Code your solutions in this file
/*
for (let age =30; age < 40; age++) {
    console.log(`I'm ${age} years old.  Happy Birthday to me!`)
}


const gifts = ["teddy bear", "drone", "doll"]


function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`)
        debugger
    }
    return gifts
}

wrapGifts(gifts)

*/


const thankYouCards = []

function writeCards(name, eventName) {
    for (let x=0; x < name.length; x++) {
        thankYouCards[x] = `Thank you, ${name[x]}, for the wonderful ${eventName} gift!`
        debugger
    }
    return thankYouCards
}
writeCards(["Guadelupe", "Ollie", "Aki"], "surprise")


function countDown(x) {
    let num = x;
    while (num > -1) {
        console.log(num--)
    }
}
console.log(countDown(10))
