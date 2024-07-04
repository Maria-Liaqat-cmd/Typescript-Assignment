//Create a function that takes an array, an index, and a value as parameters. Inside the function,
//use the splice method to insert the value at the specified index in the array. Return the modified array.

let arrayFunction = (array: number[] , index: number , param: number): number[] => {
let newArray: number[] = array;
newArray.splice(index , 0 , param);
return newArray;
} 
let arrayFuncResult: number[] = arrayFunction([0 , 1 , 2 , 3 , 4 ,5] , 3 , 1000);
console.log("arrayFuncResult" , arrayFuncResult);

//Implement a simple shopping cart program using an array. 
//Create functions to add items, remove items, and update quantities using the splice method. 
//Print the cart's contents after each operation

// Add Items Function...
let shoppingCart: string[] = ["Tomatoes" , "Apples" , "Grapes" , "Dates" , "Peaches"];
let addItems = (item: string): void => {
shoppingCart.splice(shoppingCart.length , 0 , item);
console.log(shoppingCart);
}
addItems("WaterMelon");

// Remove Items Function...
let shoppingCart2: string[] = ["Tomatoes" , "Apples" , "Grapes" , "Dates" , "Peaches"];
let removeItems = (itemToBeRemoved: number) => {
shoppingCart2.splice(itemToBeRemoved , 1);
console.log("shoppingCart2" , shoppingCart2);
}
removeItems(1);

//Write a program that uses a while loop to print the first 25 integers.

let i = 1;
while (i <= 25) {
console.log("Integer Is" , i);
i++;
}
// //Write a program that uses a while loop to print the first 10 even numbers.

let a = 1;
while (a <= 20) {
if (a % 2 == 0) {
console.log("Even Number Is" , a);
}
a++;
}

//Create a function that takes a positive integer as parameter and uses a while loop to calculate 
//and return the factorial of that number.


let factorialNumber = (n: number): number => {
if (n === 0 || n === 1) {
return 1;
} else {
let result = 1;
let i = 2;
while (i <= n) {
result *= i;
i++;
}
return result;
}
}
    
let factorialResult: number = factorialNumber(10);
console.log("factorialResult" , factorialResult);

//Write a program having an array of numbers if the number is negative it should remove 
//the negative number from the array.

let removeNum = (array:number[]): void => {
let newArray: number[] = [];
let i = 1;
while (i < array.length) {
if (array[i] >= 0) {
newArray.push(array[i]);
}
i++;
}
console.log("newArray" , newArray);
}
removeNum([1 , -1 , 2 , -2 , 3 , -3 , -1988 , -678]);

//Create a function that takes an array of numbers as parameter. 
//Use a while loop to calculate and return the sum of all the numbers in the array.

let sumArray = (array: number[]): number => {
let sum = 0;
let i = 0;
while (i < array.length) {
sum += array[i];
i++;
}
return sum;
}
let sumArrayResult: number = sumArray([2 , 3 , 4 , 5 , 6 , 7 , 8]);
console.log("sumArrayResult" , sumArrayResult);

//Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.
//Write a program to remove all the odd numbers from an array.

let cToFahrenheit = (arrayTemp: number[]): void => {
let newArray: number[] = [];
let i =0;
while (i < arrayTemp.length) {
let temp: number = (9 / 5 * arrayTemp[i]) + 32;
newArray.push(temp);
i++;
}
console.log("newArrayOfFahrenheit" , newArray);
}
cToFahrenheit([100 , 200 , 300 , 400]);
    
//Write a program to remove all the odd numbers from an array
    
let removeOddNumbers = (array: number[]): void => {
let newArray: number [] = [];
let i = 1;
while (i < array.length) {
if (array[i] %2 == 0) {
newArray.push(array[i]);
}
i++;
}
console.log("newArray" , newArray);
}
removeOddNumbers([2 , 3, 5 , 7 , 11 , 13 , 17 , 16 , 22]);
    
// Declare an array of number.

let num:number[]=[1,2,3,4,5,6,7,8];
console.log(num);

// Declare an array of strings using generic type.

let words:string[]=["hello","world"];
console.log(words);

// Create a multi-dimensional array (2D array)

let multi:number[][]=[[21,34,56,78]];
console.log(multi);

// Add elements to an array using push

let fruits:string[]=["apple","banana","pear"];
fruits.push("melon");
console.log(fruits);

// Remove the last element using pop

let array:string[]=["potato","tomato","camcicum","cabbage"];
array.pop();
console.log(array);

// Add elements to the beginning using unshift

let array1:string[]=["potato","tomato","camcicum","cabbage"];
array1.unshift("brinjal");
console.log(array1);

// Remove the first element using shift

let array2:string[]=["potato","tomato","camcicum","cabbage"];
array2.shift();
console.log(array2);

// Declare a tuple (fixed-length array with multiple types)

let tuple:[string,number]=["john",30];
console.log(tuple);

// Use the spread operator to combine arrays

let num1:number[]=[1,2,3,4];
let num2:number[]=[2,3,4,5];
let combineArray=[num1,num2];
console.log(combineArray);

// Use the spread operator to clone an array

let originalArray:number[]=[1,2,3,4];
let cloneArray=originalArray.slice();
console.log(cloneArray);

// Slicing a part of an array

let namePerson:string[]=["ali","hamza","adil","moon"];
namePerson.slice(3,1);
console.log(namePerson);

// Splicing an array to remove elements

let element:string[]=["ali","hamza","adil","moon"];
element.splice(2,0,"maria");
console.log(element);

// Joining elements of an array into a string

let element1:string[]=["ali","helloworld"];
let joinArray=words.join('ali',);
console.log(joinArray);

// Reversing an array

let array5:number[]=[1,2,3,4,5];
let reverseNumber=[array5].reverse();
console.log(reverseNumber);