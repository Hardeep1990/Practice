

function changeColor() {
   console.log ("fuction called");
   document.body.style.backgroundColor = 'skyblue';
}
function showTabContent(event, tabNo) {

	const navTabElement = document.getElementsByClassName('tab-content')[0];
	const divElements = navTabElement.querySelectorAll('div'); // ALL div with the content to show/hide

	// Looping through the three divs & hiding ALL of them
	divElements.forEach(divElement => {
		divElement.style.display = 'none'; // hiding all
	})

	// Showing the selected div
	const tabToShow = document.getElementById(`tab-${tabNo}`);
	tabToShow.style.display = 'initial'; //showing just one
}

showTabContent( {}, 1 );