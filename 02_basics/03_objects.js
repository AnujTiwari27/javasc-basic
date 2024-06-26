// singleton 
// object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Anuj",
    "full name" : "Anuj Tiwari",
    [mySym] : "key1",
    age : 18,
    location : "lucknow",
    email : "tieanuj@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday" , "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser[mySym])

JsUser.email = "Anujtiwari@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "Anujtiwari@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`hello JS user ${this.name}`)
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());