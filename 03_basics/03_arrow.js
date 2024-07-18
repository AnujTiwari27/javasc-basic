const user = {
    username : "Tiwariji",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to the website `)
        // console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "Anuj"
// user.price = 399
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username = "Hiteash"
//     console.log(this.username);
// }

const chai= () => {
    let username = "Hiteash"
    console.log(this);
}

// chai()

// const addtwo = (num1 , num2) => num1 + num2 

// const addtwo = (num1 , num2) => (num1 + num2)

const addtwo = (num1 , num2) => ({username: "hitesh"})

console.log(addtwo(33,4))