// for of

// ["" , "", ""]
//[{} , {} , {}]

const arr = [1 , 2 , 3, 4, 5]
for (const num of arr) {
    // console.log(num)
}

const string = "Hellow world"
for (const greet of string) {
    if(greet == " "){
        continue
    }
    // console.log(`Current letter is ${greet}`)
}

// MAPS 

const map = new Map()
map.set('IN' , "India")
map.set('USA' , "United state of America")
map.set('Fr' , "France")

for (const [key ,value] of map) {
    // console.log(key , ":-" , value)
}

const myObject = {
    'game1' : 'NFS',
    'game2'  : 'Spiderman'
}

for (const [key,value] of myObject) {
    console.log(key , ':-' , value);
}
