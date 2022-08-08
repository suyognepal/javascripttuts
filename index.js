console.clear() // Clear the console

// 1. Ways to print in JavaScript
console.log("Hello World");
alert('Hello');
document.write("this is document write")

// 2.Javascript console Api
console.log("Hello World", 5 + 5 + " Another log");
console.warn("This is warning");
console.error("This is an error");

// 3. JavaScript Variables
// What are Variables? ===> Containers to store data values
//variables are By default not defined data type

// Numbers
var number = 34;
var number2 = 56;
console.log(number + number2);

// 4. Data types in javascript

// String
var str = "This is a string";
var str1 = "This is a string1";

// Numbers
var number1 = 34;
var number3 = 56;

// Objects = like dictionary in python

var marks = {
  ram: 34,
  hari: 78,
  bahadur: 99.7,
};
console.log(marks);

// Booleans
var a = true;
var b = false;
console.log(a);

//undefined - That is which that is not defined
var und = undefined;
var und1;
console.log(undefined);
console.log(und1);

//Null and undefined are diffrent things
var n = null;
console.log(n);

/*
At a very high level, there are two types of data types in JavaScript:
1. Primitive data types: undefined, null, number, string, boolean, symbol
2. Reference data types: array, objects
*/

//Arrays
//Counts starts at 0
var arr = [1, 2, "haary", 4, "bahadur"];
console.log(arr)
console.log(arr[2])

// Operators in javascript
//Arithmetic operators
var c = 34;
var d = 45;
console.log("The value of c + d is ", c + d);
console.log("The value of c - d is ", c - d);
console.log("The value of c * d is ", c * d);
console.log("The value of c / d is ", c / d);

// Assigment Operators
var e = b;
c *= 2;
c -= 2;
c +=  2;
console.log(c);

// Comparison operators
var x = 23;
var y = 95;
console.log(x==y)
console.log(x>=y)
console.log(x<=y)
console.log(x>y)
console.log(x<y)

// Logical Operators

// Logical And - both has to be true to be true
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

//Logical OR - if 1 is true true
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// Logical not > Make false true and vice versa
console.log(!false)
console.log(!true)

// 5. Functions in JavaScript
// > Function needs to be called to be executed

function avg(a, b) {
  c = (a + b) / 2;
  return c;
}
// > DRY = Do no Repeat Yourself
c1 = avg(10, 12);
c2 = avg(23, 12);
console.log(c1+c2);
// Blue color means = Number (in chrome console)
// Black color means =  Strings

// Conditionals in Java Script

  // Single if statement

  var age = 2;

if (age > 18) {
  console.log("Your can have  beer");
}

// if - else statement
if (age > 18) {
  console.log("Your can have  beer");
} else {
  console.log("You cannot have a beer");
}

//if-else ladder

if (age > 32) {
  console.log("You are old");
} else if (age > 26) {
  console.log("You are not a kid");
} else if (age > 22) {
  console.log("You are growing up");
} else if (age > 18) {
  console.log("You are kid");
} else {
  console.log("Obviously a kid");
}
console.log("End of ladder");

// For Loops in Java Script

// Lopping inside an array
var arr = [1,2,3,4,5,6,7]
for(var i = 0;i<arr.length;i++ ){
    console.log(arr[i]);
}

//Another way to loop array

arr.forEach(function(element){
    console.log(element);
});


// Constant Variable
const ac = 0; // variable that cannot be overwritten
ac = ac + 1;


// While lopp
// Prints arr[j] until while condition is Satisfied

let j=0;
while(j<arr.length){
    console.log(arr[j]);
    j ++;
}

// Do while Loop

// Prints arr[b] until while condition is Satisfied
do {
  console.log(arr[b]);
  b++;
} while (b < arr.length);

//for loop continue
for( var i =0;i<arr.length;i++){
    if(i==2){
        // break;
        continue; // Continues while i equals 2
    }
    console.log(arr[i])
}


//Methods on Arrays
let myArr = ["Fan", "Camera", 34, null, true];
console.log(myArr.length);
myArr.pop(); //pops last element
myArr.push("New Name");
myArr.shift(); //removes first chacater
const newlen = myArr.unshift("New Name");
console.log(newlen);
console.log(myArr);
myArr.toString();

// Strings Methods in Javascript
let myFirstString = "Suyog Nepal is a good good boy suyog";
console.log(myFirstString.length);
console.log(myFirstString.indexOf("good"));
console.log(myFirstString.lastIndexOf("good"));
console.log(myFirstString.slice(0,5));
console.log(myFirstString.replace("Suyog", "Hari"));

//Dates in JavaScript
let myDate = new Date();
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getMinutes());
console.log(myDate.getHours());


//Dom - Document Object Model 
// Dom manipulation
let elem = document.getElementById('click'); //Get html element by id name
console.log(elem);

let elemclass = document.getElementsByClassName('container'); // Select class container
console.log(elem);

elemclass[0].style.background = "red"; // Change bg color of class container via javascriot

elemclass[0].classList.add("bg-primary"); // Add a class bg-primary
elemclass[0].classList.add("text-success"); // Add class text-success
// console.log(elem.innerText);
// console.log(elem.innerText);


console.log(elemclass[0].innerText); // Get Element innertext
console.log(elemclass[0].innerHTML);  // Get Element innerHtml

tn = document.getElementsByTagName('div') // Get Element by tagname
console.log(tn)

createdElement = document.createElement('p'); //Create an html element
createdElement.innerText = "This is a created paragraph" // Write innerText in created element
tn[0].appendChild(createdElement); //Append in existing element
createdElement2 = document.createElement('h1');
createdElement2.innerText = "This is a h1"
tn[0].replaceChild(createdElement2, createdElement); //Replace element

// removeChild(element); ----> removes an element


// Selecting containers of html pages using Query

sel = document.querySelector('.container')
console.log(sel);

sel = document.querySelectorAll('.container')
console.log(sel);


// Events in Java Script
// > Event is a happening or interaction

function clicked(){
    console.log("The button was clicked")
}
// Event when button on index.html is clicked

window.onload = function(){
    console.log("The document was loaded")    
} // Event on window load

firstContainer.addEventListener('click', function(){
    document.querySelectorAll(".container")[0].innerHTML = "<b> We Have Clicked"
    console.log("Clicked");
})

// Event on Click

let prevHtml = document.querySelectorAll('.container')[0].innerHTML;
firstContainer.addEventListener('mouseover', function(){
    document.querySelectorAll('.container')[0]= prevHtml;
    console.log("on mousehover");
})  // Event on mouse hover


firstContainer.addEventListener('mouseout', function(){
    document.querySelectorAll(".container")[0].innerHTML = "<b> We Have Mouse Out Triggred "
    console.log("on mouseout");
})  // Event on mouseout


// Arrow function


function sum(a,b ){
  return a+b;
}

// Function can be written as
sum = (a,b)=> {
  return a+b;
}
console.log(sum(6,7))

dologging = ()=>{
  document.querySelectorAll('.container')[0].innerHtml = "<p><b> set timeinterver fired</p></b>"
  console.log("I am your log");
}

// SetTimeout and setinterval
setTimeout(dologging, 2000); // Returns dologging functions at 2 s
clr = setInterval(dologging, 5000); // Returns dologging functions every 5 seconds
clearTimeout(clr); // Cancles set interval and setTimeout


// Javascript Local Storage
 // Can save to user machine as a strings


 localstorage
 localStorage.setItem('name', 'harry')
localStorage.getItem('name');
localStorage.removeItem('name') // Removes specefic key
localstorage.clear() // Clears all localstorage




//Java Script - Json

//JSON stands for JavaScript Object Notation

// JSON is a lightweight format for storing and transporting data

// JSON is often used when data is sent from a server to a web page

// JSON is "self-describing" and easy to understand

// Json only accepts double qoutes

obj = {name: "Suyog", length: 1, a: {this: "That"}}; // Creating object

js = JSON.stringify(obj) // Converts objects into json
console.log(js);
console.log(typeof(obj));
console.log(typeof(js));

parsed = JSON.parse(`{"name":"Suyog","length":1,"a":{"this":"That"}}`); // Converts String into Json
console.log(parsed);


//ECMA - Standarazation of javascript 
//Updates are pushed here


// Tempate literals - Backticks

a = 34;
console.log(`This is a backtrick ${a}`)











