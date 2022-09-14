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