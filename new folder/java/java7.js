/* const persone = {
    firstname : 'hardeep',
    lastName : 'Kaur',
    greet : function() {
        console.log("hello everyone !");
    }
}

console.log('map Method');
const mapArray = [0, 1, 2, 3];
console.log('initial Array = ' + mapArray);
const ArrayAfterMapping = mapArray.map((item, index) => {
  return item + 1;
});
console.log('mapped array = ' + ArrayAfterMapping);*/

let currentColorIndex = 0;
//document.body.style.backgroundcolor=colorArray[currentColorIndex];
// Function to be called on button being clicked
function changeColor() {
  //                      0       1     2       3         4         5        6         7
  const colorArray = ['white', 'blue', 'red', 'green', 'yellow', 'orange', 'pink' ,'skyblue'];
  if (currentColorIndex === 7) {
    currentColorIndex = 0; // goes from index 5 to index 0, ie orange to white
  } else {
    currentColorIndex++;
  }
  document.body.style.backgroundColor = colorArray[currentColorIndex];
}

//const elementHeader = document.getElementById('elementHeader');
const elementHeader = document.querySelector('#elementHeader');
elementHeader.style.fontSize = '100px';
elementHeader.style.fontFamily = 'Arial';
elementHeader.textContent = ' I have changed text.';


function checkFavoriteFood(foodItemsArray, favFoodItem) {
  return foodItemsArray.includes(favFoodItem);
}
// const checkFavoriteFood = (foodItemsArray, favFoodItem) =>
//   foodItemsArray.includes(favFoodItem);
const fruits = ['apple', 'mango', 'grape'];
checkFavoriteFood(fruits, 'mango'); // true
checkFavoriteFood(fruits, 'banana'); // false
false

const randomWords = [
  'word',
  'pen',
  'applesss',
  'alongword',
  'mouse',
  'thiswordhasatleast6chars',
];
const removeLongWords = (words) => words.filter((word) => word.length > 6);
removeLongWords(randomWords);

let emailId = objectArray.filter((email) => { return email.email[1] === 'e'});

const number = [1,2,3,4,5,6,7,8,9];
number.splice(2,3);


// classes in js ***************************************************

class User {
  constructor(first, last) {
      this.firstname = first;
      this.lastname = last;
  }
}
const user1 = new User("hardeep","kaur")
console.log(user1);
console.log(user1.firstname, user1.lastname);

class Person {
  // Constructor is a special method of the class
  // The Constructor needs to be unique for a class (only one allowed in a class) 
  constructor(name) {
    this.name = name;
  }
  introduce() {
    console.log('Hello, I am ' + this.name);
  }
}
// New keyword is used to create a new object of the class 'Person' and the newly 
// created object is stored in sebin
const sebin = new Person('Sebin Benjamin');
console.log(sebin.name);
sebin.introduce();
// Another object is created
const john = new Person('John Doe');
console.log(john.name);
john.introduce();

//********************************************************************************* */

//ids in js  *******************************************

const id = {
  firstname: "hardeep",
  lastname: "kaur",
  greet: function()  {
      console.log("hello", this.firstname);
  }
};
undefined
id.greet();  
//***************************************************************** */

// combine arrays *************************


let nums = [1,2,3,4,5]
undefined
let string = ['hardeep','kaur','asees','kaur']
undefined
let comine = [...nums, ...string]
undefined
/*combine
VM3471:1 Uncaught ReferenceError: combine is not defined
    at <anonymous>:1:1                                            outputs
(anonymous) @ VM3471:1
comine;
(9) [1, 2, 3, 4, 5, 'hardeep', 'kaur', 'asees', 'kaur']0: 11: 22: 33: 44: 55: "hardeep"6: "kaur"7: "asees"8: "kaur"length: 9[[Prototype]]: Array(0) */
let newarray = [...comine, 
               favfood = 'pizza'];
undefined
//newarray;                         output
//(10) [1, 2, 3, 4, 5, 'hardeep', 'kaur', 'asees', 'kaur', 'pizza']0: 11: 22: 33: 44: 55: "hardeep"6: "kaur"7: "asees"8: "kaur"9: "pizza"length: 10[[Prototype]]: Array(0)

// ********************************************************************************************************

