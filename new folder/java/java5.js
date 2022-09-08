// Element which contains the text input
const inputElement = document.querySelector('input');
// Adding a listener on that element
inputElement.addEventListener('input', (event) => {
  // Get the 'value' from the event source
  const message = event.target.value;
  const letterCount = message.length;
  updateCount(letterCount);
});
// Updating the displayed value of the count 
function updateCount(letterCount)
 {
  const letterCountElement = document.querySelector('p');
  letterCountElement.innerText = 'Letter Count : 0' + letterCount;
}
