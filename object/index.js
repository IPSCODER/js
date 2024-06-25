// object in js

const user ={
    name : "Roadside Coder",
    age: 24
}

// for updating 

user.name = "pravin"

console.log(user);


// for delete

delete user.age


// for ifee function

const func = (function(a){
    delete a;
    // delete keyword only used for object keys 
    return a;
})(5)

console.log(func);


const user = {
    name: "coder",
    age:24,
    // like this key = <- I want add key then
    "like this key":true
}


// if i want access this keyword then i use 
console.log(user["like this key"]);

// also for delete

delete user["like this key"]


const property = "firstname";
const name = "Piyush Agarwal";

// first
const user = {
    property : name
}

// second
const user = {
    [property] : name
}


console.log(user.firstname);

// for looping 

const user = {
    name : "coder",
    age:24,
    isTotallyAwesome : true
}

// only for key

for ( key in user) {
    console.log(key);
}

// only for value

for ( key in user) {
    console.log(user[key]);
}


// when two keys with same name then first key is replaced

const obj  = {
    a:"one",
    b:"two",
    a:"three"
}

console.log(obj);

// question create a function multipleByTwo(obj) that multiplies all numeric property values of nums by 2

let nums = {
    a:100,
    b:200,
    title:"My Nums"
}

multipleByTwo(nums);

function multipleByTwo(obj){
    for (key in obj){
        if (typeof obj[key] === "number" ) {
            obj[key] = obj[key] * 2
        }
    }
}



// for storing arrays value in object

let a = [1, 2, 3, 4];

let obje = {};

// Using array indices as keys
for (let i = 0; i < a.length; i++) {
    obje[i] = a[i];
}

console.log(obje);

let namea = "pravin";
let objs = {};

for (let i = 0; i < name.length; i++) {
    let letter = namea[i];
    objs[letter] = true; // You can set any value you want here, true for simplicity
}

console.log(objs);


let names = "pravin";
let objt = {};

for (let i = 0; i < names.length; i++) {
    objt[i + 1] = names[i];
}

console.log(objt);

let namess = "letter";
let objts = {};

for (let i = 0; i < namess.length; i++) {
    let letter = namess[i];
    if (objts[letter]) {
        objts[letter] += 1;
    } else {
        objts[letter] = 1;
    }
}

console.log(obj);


const abj = {};

const b = { key : "b"};
const c =  { key : "c"};

abj[b] = 123;
abj[c] = 456;

// b is not going converted into key in abj because its a object unless its a string thats why its overlapped and gives result 456

// a["[object object]"] =123
// a["[object object]"] =456

// what is JSON.stringify and JSON.parse ?


const user = {
    name:"coder",
    age:24
}

// for convert into string 

const stringObj = JSON.stringify(user)


// for convert into object

const objobj = JSON.parse(stringObj)

// whats the output

console.log([..."lydia"]);
// ["l","y","d","i","a"]

// for this 

const user = {name:"coder",age:24}

const admin = {admin:true,...user}

console.log(admin);

// for this

const settings = {
    username:"coder",
    level:19,
    health:90
}

const data = JSON.stringify(settings,["level","health"])

// for this 

const shape = {
    radius:20,
    diameter(){
        return this.radius * 2;
    },
    perimeter:() => 2 * Math.PI * this.radius, 
}
console.log(shape.diameter());
console.log(shape.perimeter());

// what is destructuring in obj

let user = {
    name :"coder",
    age:24
}

const { name:myName } = user;


// for this

let user = {
    name:"coder",
    age:24,
    fullname:{
        first:"name",
        last:"name"
    }
}

const {fullname:{first}} = user;
