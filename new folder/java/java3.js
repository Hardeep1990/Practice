//function changeColor()
//{
  //  document.body.style.backgroundColor = "pink"
//}
//document.getElementById('btn-pink').addEventListener('click', () => {
  //  document.body.style.backgroundColor = 'pink'
  //});
  function changeColor()
   {
document.body.style.backgroundColor = 'skyblue';
 }
  const btnElement = document.getElementById('btn-skyblue');
  btnElement.addEventListener('mouseover', changeColor);