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


// flat

const flatEx = [1,[2,3],[[4,5],6]] // [1,2,3,4,5,6]

const flattendArray = flatEx.flat(2) // 2 parameter is for depth of method

// reverse

nums.reverse();

// sort

const unsorted = [1,2,4,64,,5,3]

unsorted.sort()

function secondLargest(arr){
    const uniqueArr = Array.from(new Set(arr))

    uniqueArr.sort((a,b) =>{
        return b - a
    })

    if (uniqueArr.length >= 2) {
        return uniqueArr[1];
    }else{
        return -1
    }
    console.log(uniqueArr);
}

// optimisedSearch

function secondLargestOptimised(arr){
    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i]
        }else if(arr[i] != largest && arr[i] > secondLargest ){
            secondLargest = arr[i]
        }   
    }
}

// rotate array by k

// given an integer array nums, rotate the array to the right by k steps, where k is non - negative 

// Input : nums = [1,2,3,4,5,6,7], k = 3 ---> Output :[5,6,7,1,2,3,4]

// explanation --
// [1,2,3,4,5,6,7] => [7,1,2,3,4,5,6] => [6,7,1,2,3,4,5] = [5,6,7,1,2,3,4]

function rotateArray(nums,k) {
    let size = nums.length;
    if (size > k) {
        k = k % size; 
    }

    const rotated = nums.splice(size - k,size) // 

}

function findPairs(arr, target) {
    let pairs = [];
    let seen = new Set();

    for (let num of arr) {
        let complement = target - num;
        if (seen.has(complement)) {
            pairs.push([num, complement]);
        }
        seen.add(num);
    }
    return pairs;
}

let arr = [0.1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(findPairs(arr, 8));
