const myNums = [1,2,3]

// const myTotal = myNums.reduce(function( acc , currval) {
//     console.log(`acc : ${acc} and currval : ${currval}`)
//     return acc + currval
// },3)

const myTotal = myNums.reduce( (acc, curr) => (acc +curr),0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName : "js Course",
        price : 2999
    },
    {
        itemName : "python Course",
        price : 999
    },
    {
        itemName : "data science Course",
        price : 12999
    }
]

const totalprice = shoppingCart.reduce( (acc , curr) => (acc + curr.price ),0)
console.log(totalprice);