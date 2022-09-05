let x=0;
while(x<=10)
{
    console.log(x);
    x++;
}
let string = 'A@string!';
for (let i = 0; i < string.length; i++) {
  if (
    string[i] === '!' ||
    string[i] === '@' ||
    string[i] === '#' ||
    string[i] === '$' ||
    string[i] === '%' ||
    string[i] === '^' ||
    string[i] === '&' ||
    string[i] === '*'
  ) {
    console.log('Error: a restricted symbol was found in the string.', string[i]);
    break;
  }
  // else {
  //   console.log(string[i]);
  // }
}
let name="har!deep";
for(let i=0; i<name.length; i++)
    {
        if(name[i]!=='!')
        {
            console.log(name[i]);
            continue;
        }
    }
function myFirstFunction()
{
  console.log("I just called my first function");
}
function printString(name1,name2)
    {
        console.log(name1);
        console.log(name2);
    }
printString('hello','hardeep');
function stringCombine(str1, str2)
 {   
  console.log(str1 + ' ' + str2);
 }
 stringCombine('hello','hardeep');
 function findSum(num1,num2)
 {
  return (num1+num2);
 }
 findSum(9,5);
 function double(num)
 {
  return (num*2);
 }
 double(9);
 function rectangleArea(width,height)
    {
        return(width*height);
    }
let area= rectangleArea(6,7);
console.log('area of rectangle is='+area);
function isStringEmpty(str)
 {     
if(str == "")
  {
             return true;  
               } 
      else 
      {
         return false; 
  } 
  
  }
  
  function isStringEmpty(str) {     

    if(str == "") {         return true;     }     else { return false; 
    } 
    
    }
    
    let result = isStringEmpty('abc');
    
    console.log('result is', result)

    const array = (str3,str4) =>
    {
        return(str3+str4);
    }
let arrow = array('hello','world');
console.log("combine string = "+arrow);
const combineStringsShort = (str1, str2) => str1 + ' ' + str2;
const doubleNumbersArrowFn = (num) => {
  return num * 2;
};
const doubleNumbersArrowFnShort = (num) => num * 2;
const checkIfEven = num =>
 {
       if(num  % 2 === 0)
        {
                   return true; 
                      } 
                             else
                              { 
                                return false;
                               } 
                              }
                              
                              
 const checkifItOdd = num =>(num%2==0);


 function messageConverter(inputString) {
  const trimmedInputString = inputString.trim(); // 'HeLlO EverYone'
  const stringLength = trimmedInputString.length;
  // If the length of the string is <= 10, return the uppercase version of the string
  if (stringLength <= 10) {
    return trimmedInputString.toUpperCase(); // HELLOONE
  } else {
    return trimmedInputString.toLowerCase(); // hello everyone
  }
}
// II - Using the fn
//  Prompt the user to enter a sentence and store the value in a variable .
const userInput = prompt('Please enter a sentence');
// Call the messageCaseConverter function and alert out the string returned
const messageToUser = messageConverter(userInput);
alert(messageToUser);

function halfNumber(wholeNumber) {
  const halvedNumber = wholeNumber/2;
  return halvedNumber;
}
const result = halfNumber(23);
// const userInput = prompt('Enter a whole number');
// const userInputNum = parseInt(userInput);
// const result = halfNumber(userInputNum);
console.log('Half of 23 is ' + result);

function getTimeInSeconds(timeInMinutes) {
  const timeInSeconds = timeInMinutes * 60;
  return timeInSeconds;
  // return timeInMinutes * 60;
}
const userInputMinutes = prompt('Enter the minutes', '5');
const userInputMinutesNum = parseInt(userInputMinutes);
const timeInSeconds = getTimeInSeconds(userInputMinutesNum);
alert(userInputMinutes + ' minutes is ' + timeInSeconds + ' seconds');

const Persons = {
  name:'hardeep',lastna:'kaur'};
undefined
console.log(Persons['name']);
Persons.lastname;


const numbers = [5, 6, 7, 8, 9, 10];
let sum = 0;
for (let index = 0; index < numbers.length; index++) {
  const num = numbers[index];
  sum = sum + num;
}
const average5 = sum / numbers.length;

const object ={
  name: 'pizza',
  serving: 1,
  ingredients:['capcicum','tomatos','pineapple'],
};
object.ingredients.push('corn');
