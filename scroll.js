
const supportPageOffset = window.pageXOffset !== undefined;
const isCSS1Compat = ((document.compatMode || "" ) === "CSS1Compat");
const fadeItems = document.getElementsByClassName('fadeAnim');

const scrollDown = document.getElementById('scrolldown');

for(let item of fadeItems){
	item.setAttribute('fade', 'false');
	item.setAttribute('style','opacity: 0;');
}

window.addEventListener('scroll', event => {
	"use strict";
	const y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;

	for(let item of fadeItems) {
		if( (item.offsetTop - y) < 750){
			toggleFadeIn(item);
		}
	}
	toggleFadeOut(scrollDown);
});


function toggleFadeIn(target){
	if(target.getAttribute('fade') === 'false') {
		target.setAttribute('style','animation: fadeIn 1s ease-in;');
		target.setAttribute('fade','true');
	}
}

function toggleFadeOut(target){
	if(target.getAttribute('fade') === 'true') {
		target.setAttribute('style','animation: fadeOut 1s ease-in; animation-fill-mode: forwards; -webkit-animation-fill-mode: forwards; -moz-animation-fill-mode: forwards; -o-animation-fill-mode: forwards;');
		target.setAttribute('fade','false');
	}

	// target.setAttribute('style','opacity: 0;');
}

function stickyFunc(target){
	if(window.pageYOffset >= target.offsetTop){
		target.classList.add("sticky");
	}else {
		target.classList.remove("sticky");
	}
}