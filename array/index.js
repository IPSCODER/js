// array - declaration

let person = {
    name:"coder",
    age:27
}

let  arr = ["apple","banana","cherry",person]

// arrays - add and remove elements
// add in the end of the array
arr.push("orange");

// remove from the end of the array
arr.pop();
arr.pop();


// add from the top of the array

arr.unshift("orange")
console.log(arr);

// looping in array

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

let i = 0;

while(i < arr.length){
    console.log(arr[i]);
    i++;
}

// inbuilt loop method

const number = [1,2,3,4,5,6];

number.map((item,index,array) => {
     console.log(item,index,array)
})

number.filter((item,index,array) =>{
    return item > 3
})

// prevValue = accumulator

number.reduce((prevValue,item,index,array) => {
    return prevValue + item
},0) // if provided prevValue = 0 if not then arrays first index value like 1

number.some((item,index,array) => {
    return item > 3
})
// return boolean value like true or false if there some element are more than 3

number.every((item,index,array) => {
    return item > 3
})
// return boolean value like true or false if there every value is greater than 3


number.find((item,index,array) => {
    return item > 3
})
// return first value of result

// Spread and rest operator

const numOne = [1,2,3]
const numTwo = [4,5,6]

const finalNums = [...numOne,...numTwo] // spread operator

const sum = (...numbers) =>{
    return numbers
}

console.log(sum(numOne,numTwo));

// concat
const newArr = numOne.concat(numTwo,arr)

// slice

const newSlice = arr.slice(0,2) //return 0st and 1st index not second 

// also 

arr.slice(-1) // elements from the last one

// splice

arr.splice(1,2,"orange") // from 1st to second value deleted and orange is added to the array

// fill

const dummy = [1,2,3,4]

dummy.fill(0,2) // remove all elements from array and fill all value with 0 with their index which is 2