const myObject = {
    js : "javascript",
    cpp : "C++",
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`)
}

const array = ["js" , "cpp" , "rb" , "swift"]

for (const key in array) {
    // console.log(array[key]);
}

const map = new Map()
map.set('IN' , "India")
map.set('USA' , "United state of America")
map.set('Fr' , "France")

for (const key in map) {
    console.log(key);
}