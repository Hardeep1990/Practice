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