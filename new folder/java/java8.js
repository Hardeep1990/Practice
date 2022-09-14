// Function that is run on clicking the top taBS
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

// function onTabclick(event) {
// 	console.log('onTabclick called', event.target);

// 	let activeTab = document.querySelectorAll('.active');

// 	// Removing the '.active' class for all the elements
// 	for (let i = 0; i < activeTab.length; i++) {
// 		activeTab[i].className = activeTab[i].className.replace('active', '');
// 	}

// 	// Adding the active class to the clicked tab
// 	event.target.parentElement.className + '= active';
// }

// const element = document.getElementsByClassName('nav-tab')[0];
// element.addEventListener('click', onTabclick, false);




























/*
window.addEventListener("load", function() {
	// store tabs variable
	let myTabs = document.querySelectorAll("ul.nav-tabs > li");
  function myTabClicks(tabClickEvent) {
		for (let i = 0; i < myTabs.length; i++) {
			myTabs[i].classList.remove("active");
		}
		let clickedTab = tabClickEvent.currentTarget;
		clickedTab.classList.add("active");
		tabClickEvent.preventDefault();
		let myContentPanes = document.querySelectorAll(".tab-pane");
		for (i = 0; i < myContentPanes.length; i++) {
			myContentPanes[i].classList.remove("active");
		}
		let anchorReference = tabClickEvent.target;
		let activePaneId = anchorReference.getAttribute("href");
		let activePane = document.querySelector(activePaneId);
		activePane.classList.add("active");
	}
	for (i = 0; i < myTabs.length; i++) {
		myTabs[i].addEventListener("click", myTabClicks)
	}
});*/
