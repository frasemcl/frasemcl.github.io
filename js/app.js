'use strict';

const shinybtn = document.querySelector('.btn--shiny');
const shinymodal = document.querySelector('.shiny-intro-modal');

function handleClick() {
	shinymodal.style.display = 'none';
}

shinybtn.addEventListener('click', handleClick);

// NOT WORKING
// shinybtn.addEventListener('click', function () {
// 	console.log('you clickckckckckced');
// 	console.log(shinymodal.classList);
// 	shinymodal.classList.add('disp-none');
// 	console.log(shinymodal.classList);
// });
