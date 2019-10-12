
const supportPageOffset = window.pageXOffset !== undefined;
const isCSS1Compat = ((document.compatMode || "" ) === "CSS1Compat");
const fadeItems = document.getElementsByClassName('fadeAnim');
let scrollPos = 0;
const scrollDown = document.getElementById('scrolldown');
const topNav = document.querySelector('.nav-bar');
const bottomNav = document.querySelector('.nav-article-bar');

for(let item of fadeItems){
	item.setAttribute('style','opacity: 0;');
}

window.addEventListener('scroll', event => {
	"use strict";
	const y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
	toggleNav();

	if( fadeItems.length !== 0){
		for(let item of fadeItems) {
			if( (item.offsetTop - y) < 750){
				toggleFadeIn(item);
			} 
		}
	}

	if(scrollDown !== null) {
	toggleFadeOut(scrollDown);
	}

});

function toggleNav(){
	if ((document.body.getBoundingClientRect()).top > scrollPos) // scroll up
	{
		topNav.classList.remove('topNavDisappear');
		if(bottomNav !== null){
			bottomNav.classList.add('bottomNavDisappear');
		}
	}
	else // scroll down
	{	
		topNav.classList.add('topNavDisappear');
		if(bottomNav !== null){
			bottomNav.classList.remove('bottomNavDisappear');
		}
	}
	// saves the new position for iteration.
	scrollPos = (document.body.getBoundingClientRect()).top;
}

function toggleFadeIn(target){
		target.classList.add('fade-in');
		target.classList.remove('fadeAnim');
}

function toggleFadeOut(target){
		target.classList.add('fade-out');
}

function stickyFunc(target){
	if(window.pageYOffset >= target.offsetTop){
		target.classList.add("sticky");
	}else {
		target.classList.remove("sticky");
	}
}