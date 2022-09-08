//const box1Element = document.getElementById('box1');
//const box2Element = document.getElementById('box2');

//box1Element.addEventListener('mouseover', () => {
  //box2Element.style.backgroundColor = 'red';
//});

//box2Element.addEventListener('mouseover', () => {
  //box1Element.style.backgroundColor = 'red';
//});

const box1Element = document.getElementById('box1');
const box2Element = document.getElementById('box2');
function changetoRed(event)
{
    event.target.style.backgroundColor = 'red';
}

box1Element.addEventListener('mouseover', changetoRed);
box2Element.addEventListener('mouseover', changetoRed);

const inputElement = document.querySelector('input');
inputElement.addEventListener('input',(event) => {
console.log(event.target.value)}
);

