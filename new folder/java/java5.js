
const inputElement = document.querySelector('input');
inputElement.addEventListener('input', (event) => {
  const message = event.target.value;
  console.log(message.length);
}
);
const letterCount = event.targer.value.length;
function updateCount(event)
{
    const currentCount = event.target.valur.length;
    console.log(currentcount);
    letterCount.innerHTML = currentcount;

}
inputElement.ddEventListner('input',updateCount);