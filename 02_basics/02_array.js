// Array

const marvel_heros = ["thor" , "ironman" ,"captain America"]
const Dc_heros = ["superman" , "flash" , "batman"]
// marvel_heros.push(Dc_heros)

// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// const all_heros  = marvel_heros.concat(Dc_heros)
// console.log(all_heros)

const all_new_heros = [...marvel_heros, ...Dc_heros]
// console.log(all_new_heros);

const another_array = [1 , 2 , 3, [4 , 5, 6] , 7 , 8 ,[9 , 10 ,[11 , 12]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitedh"));
console.log(Array.from({name : "Anuj"})); // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 , score2 , score3))