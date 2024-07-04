//Using conditional statements, check if the number is:Even or Odd.

// let num:number=10;
// if(num%2===0){
// console.log("even")
// }else{
// console.log("odd")
// }

//Positive, Negative, or Zero.

// let num1:number=17;
// if(num1>0){
// console.log("positive");
// }else if(num1<0){
// console.log("nagetive");
// }else
// console.log("zero")


//Whether it is divisible by both 2 and 3 
//or anyone of them or not divisible by both check all the cases 
//and print statement for each case.

// var num3: number = 14;
// if(num3 %2==0 ){
// console.log("this number is divisible by both 2 and 3");
// }
// else if(num3 %2==0 ){
//     console.log("this number is divisible by 2 not by 3");
// }
// else if(num3 %2!=0 ){
//     console.log("this number is divisible 3 not by 2");
// }
// else{
//     console.log("this number is not divisible not by 2 neither 3");
// }

//Take the user age.If the age is 18 or above:Ask if they have a nationality 
//of "Pakistani".If yes, print "You are eligible to vote."If no, print 
//"Please obtain a valid ID to vote."

// let age:number=22;
// if(age>18){
// console.log("thay have a nationality of pakistani");
// console.log("you are elogible to vote");
// }
// else
// console.log("you are not");

//Write a program that takes the age of a person as input and 
//determines whether they are a child (0-12 years), teenager 
//(13-19 years), adult (20-59 years), or senior citizen 
//(60 years and above)

// let age1:number=30;
// if(age1<0 && age1>12){
// console.log("they are child")
// }
// else if(age1<13 && age1>19){
// console.log("teenager");
// }
// else if(age1<20 && age1>59){
// console.log("adult");
// }
// else if(age1>60){
// // console.log("senior citizen");
// }else 
// console.log ("Invalid Age"); 
// }
//Enter a month (as a number between 1 and 12). Print the number of 
//days in that month.



// Assume a non-leap year.Check if a year is a leap year or not.

// let year:number=2020;
// if ((year % 4 === 0 )){
// console.log("leap year");
// }
// else ((year % 100 !== 0) || year % 400 === 0)
// console.log("not a leap year");

let day:number=3;
switch(day){
case 1:
console.log("monday");
break;
case 2:
console.log("tuesday");
break;
case 3:
console.log("wednesday");
break;
case 4:
console.log("thursday");
break;
case 5:
console.log("friday");
break;
case 6:
console.log("saturday");
break;
default:
console.log("invalid");
break;
}


let age:number=19;
if(age>18){
console.log("adult");
}else
console.log("invalid");

var monthename:string="feb";
switch(monthename){
case"jan":
console.log("1-31" );
break;
case "feb":
console.log("1-28");
break; 
case "mar":
console.log("1-31");
break;  
case "april":
console.log("1-30");
break;  
}