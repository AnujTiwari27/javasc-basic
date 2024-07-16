function sayMyName(){
    console.log("A")
    console.log("N")
    console.log("U")
    console.log("J")
}

// sayMyName()



function addTwoNumber(num1 , num2){
    // let result = num1 + num2;
    // console.log(result);
    return num1 + num2 ;
    console.log("Anuj")
}

const result = addTwoNumber(5,34);

// console.log("Result :", result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username")
        return;
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("Anuj"))
// console.log(loginUserMessage("Anuj"))



function calculateCardPrice(val1 , val2 ,...num1){
    return num1;

}

// console.log(calculateCardPrice(200 , 400 , 500 , 2000))

const user= {
    username : "Anuj",
    price : 199 
}

function handleObject(anyobject){
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user);
handleObject({
    username : "sam",
    price : 399

})

const myNewArray = [100 , 200 , 300 , 400 ,500];

function getSecondValue(anyArray){
    return anyArray[1];

}

// console.log(getSecondValue(myNewArray));
console.log(getSecondValue([100 , 200 , 300 , 400]));

