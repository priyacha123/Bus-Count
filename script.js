let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment(){
    count += 1
    countEl.textContent = count 
} 

function save() {
    let countStr = count + " - "

    // saveEl.innerText += " " + countStr
    // another method

    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}














// let userName = "Paul"
// let message = "You have three new notifications "

// let messageToUser = "Hello " + userName + "! " + message  
// console.log(messageToUser)

// let name = "Priya Kumari"
// let greeting = "Hii! my name is " 
// let myGreeting = greeting + name

// console.log(myGreeting)

