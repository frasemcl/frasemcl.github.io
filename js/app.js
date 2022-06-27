'use strict';

const shinybtn = document.querySelector('.btn--shiny');
const shinymodal = document.querySelector('.shiny-intro-modal');

const shinyinfobtn = document.querySelector('.shiny-box__button');
const shinyinfo = document.querySelector('.shiny-info-modal');
const shinyback = document.querySelector('.btn--shiny--back');
const mapapp = document.querySelector('iframe');

// MOVE PAST LANDING PAGE
function handleClick() {
	shinymodal.style.display = 'none';
}
shinybtn.addEventListener('click', handleClick);

// TOGGLE INFO MODAL ON/OFF
function handleShinyInfoON() {
	shinyinfo.style.display = 'flex';
	mapapp.height = '0';
}
function handleShinyInfoOFF() {
	shinyinfo.style.display = 'none';
	mapapp.height = '100%';
}

shinyinfobtn.addEventListener('click', handleShinyInfoON);
shinyback.addEventListener('click', handleShinyInfoOFF);

// NOT WORKING
// shinybtn.addEventListener('click', function () {
// 	console.log('you clickckckckckced');
// 	console.log(shinymodal.classList);
// 	shinymodal.classList.add('disp-none');
// 	console.log(shinymodal.classList);
// });
