"use strict";
//Write a program that uses filter to remove all negative numbers from an array of numbers.
// let num:number[]=[1,-2,-3,4,5,-6,7,-8];
// let removenagetivenums:number[]=num.filter((index:number):boolean => {
// return index>0;
// })
// console.log(removenagetivenums);
//Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array 
//where each number is multiplied by 2.
// let num1:number[]=[12,34,56,78,90,11,21];
// let newArray:number[]=num1.map((index:number):number=>{
// return index*2;
// })
// console.log(newArray);
//Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a 
//new array containing only the fruits with more than 5 characters.
// let fruits:string[]=["apple","banana","cherry","date","grapes"];
// let fruitsResult: string [] = fruits.filter((element: string , index: number): boolean => {
// return element.length > 5;
// });
// console.log( fruitsResult);
//Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to 
//create a new array containing the squares of even numbers.
// let array:number[]=[1,2,3,4,5,6,7,,8,9,10];
// let evenSquare:number[]=array.filter((element:number):boolean =>
// element %2 == 0) .map((element: number): number => element * element);
// console.log(evenSquare);
//Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array 
//where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
// let temperatures:number[]=[0,10,20,30,40,];
// let fahrenheittemperature:number[]=temperatures.map((temperature:number):number=>{
// return (temperature*9/5+32);
// })
// console.log(temperatures);
//Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to 
//create a new array containing the doubled values of odd numbers.
// let arr:number[]=[3,6,9,12,15,18];
// let doubled:number[]=arr.filter((element:number):number=>
// element %2 != 0) .map((element: number): number => element * 2);
// console.log(doubled);
//Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each 
//name with an exclamation mark at the end, e.g., "Alice!".
// let names:string[]=["Alice", "Bob", "Charlie", "David", "Emily"];
// names.forEach((element:string)=>{
// let modifiedNames:string=element +"!";
// console.log(modifiedNames);
// )};
