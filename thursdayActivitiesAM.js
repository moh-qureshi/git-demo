//      Activity 1


// const factorial = (n) =>{
//     if ((n === 0) || (n === 1)) {
//         return 1
//     } else {
//         return (n * factorial(n-1))
//     }
// }

// console.log(factorial(33))


//      Activity 2


// let orderCount = 0

// const takeOrder = (topping, orderCount) =>{
//     orderCount++
//     console.log(`Pizza with ${topping}. You know have ${orderCount} orders.`)
// }

// takeOrder("pineapple", 0)


//      Activity 3


// const pinNumber = 1234
// let bankBalance = 10000

// const cashWithdraw = (pin, withdrawalAmmount) =>{
//     if (pin === pinNumber){
//         if (withdrawalAmmount < bankBalance){
//             bankBalance = bankBalance - withdrawalAmmount
//             console.log(`Here is your £${withdrawalAmmount}, your remaining balance is now £${bankBalance}`)
//         } else {
//             console.log(`Unable to withdraw £${withdrawalAmmount} due to insufficient funds. Please withdraw £${bankBalance} or lower`)
//         }
//     } else {
//         console.log("Incorrect pin code. Please try again")
//     }
// }

// cashWithdraw(1234, 1000)



//      Activity 1


// const person = {
//     name: "Mohammed",
//  sayHi(){
//     return `Hello my name is ${this.name}`
//  }
 
// }

// console.log(person.sayHi())

//      Activity 2

// const pet = {
//     name: "Spike",
//     typeOfPet: "Dog",
//     age: 12,
//     colour: "Brown"
// }

// function eat(){
//     return `${pet.name} is eating`
// }


// function drink(){
//     return `${pet.name} is drinking`
// }

// console.log(eat())
