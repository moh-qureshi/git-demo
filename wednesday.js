//      Activity 1

// const songs = [
//     "Eminem - The way I am",
//     "2pac - California Love",
//     "Mist - Game Changer"
// ]

// songs.push("Akon - Smack That", "Giggs - Talking the hardest")
// songs.pop()


//          Activity 2


// const songs = [
//     "Eminem - The way I am",
//     "2pac - California Love",
//     "Mist - Game Changer"
// ]

// songs.shift()



//          Activity 1



// const favouriteFilms = ["Fast and Furious", "Harry Potter", "The Gentlemen", "Training Day"]

// favouriteFilms.push("Get Hard", "Snakes on a plane")

// for (let i = 0; i < favouriteFilms.length; i++){
//     console.log(favouriteFilms[i])
// }


//      Activity 2


// let count = 0

// while(count < 6){
//     console.log(Math.round(Math.random()*50))
//     count++
// }



//      Activity 3


// let count = 9

// while(count >= 0){
//     console.log(count)
//     count--
// }


//      Activity 4


// const favouriteFilms = ["Fast and Furious", "Harry Potter", "The Gentlemen", "Training Day"]

// for(let i = 0; i < favouriteFilms.length; i++){
//     if(favouriteFilms[2] === "Ghostbusters"){
//         console.log("Yay it's Ghostbusters")
//     } else {
//         console.log("Boo! We want Ghostbusters")
//     }
// }


//      Activity 5


// let numbers = []

// for (let i = 0; i < 6; i++){
//     numbers.push(Math.round(Math.random()*30))
//     if (numbers % 7 === 0){
//         console.log("This number is divisable by 7")
//     } else {
//         console.log("This number is not divisable by 7")
//     }
// }

const bobsFollowers = ["John", "Mike", "Sarah", "Paul"]
const hannahsFollowers = ["Kevin", "Paul", "Laura", "George"]
let result = []

for (let i = 0; i < bobsFollowers.length; i++){
    for(let j = 0; j < hannahsFollowers.length; j++){
        if (bobsFollowers[i] === hannahsFollowers[j]){
            console.log(bobsFollowers[i])
        }
    }
}