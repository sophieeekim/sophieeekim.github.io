
var supportPageOffset = window.pageXOffset !== undefined;
var isCSS1Compat = ((document.compatMode || "" ) === "CSS1Compat");
var fadeItems = document.getElementsByClassName('fadeAnim');


for(var j=0; j < fadeItems.length; j++ ){
	fadeItems[j].setAttribute('fade', 'false');
	fadeItems[j].setAttribute('style','opacity: 0;');
}


window.addEventListener('scroll', function(event) {
	"use strict";
	var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;

	for(var i =0; i < fadeItems.length; i++) {
		if( (fadeItems[i].offsetTop - y) < 500){
			toggleFadeIn(fadeItems[i]);
		}
	}



});

function toggleFadeIn(target){
	if(target.getAttribute('fade') == 'false') {
		target.setAttribute('style','animation: fadeIn 1s ease-in;');
		target.setAttribute('fade','true');
	}
}

function stickyFunc(target){
	if(window.pageYOffset >= target.offsetTop){
		target.classList.add("sticky");
	}else {
		target.classList.remove("sticky");
	}
}