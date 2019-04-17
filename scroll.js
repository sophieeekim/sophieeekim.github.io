
var supportPageOffset = window.pageXOffset !== undefined;
var isCSS1Compat = ((document.compatMode || "" ) === "CSS1Compat");
var fadeItems = document.getElementsByClassName('fadeAnim');

var bg1 = document.getElementById('bg-1');
var blur = document.getElementById('blur-value');
var downToggle = 'false';
var upToggle = 'false';

var scrollDown = document.getElementById('scrolldown');

for(var j=0; j < fadeItems.length; j++ ){
	fadeItems[j].setAttribute('fade', 'false');
	fadeItems[j].setAttribute('style','opacity: 0;');
}


var lastScrollTop = 0;
var offset1 = 0; //smaller offset
  var offset2 = 0; //bigger offset

window.addEventListener('scroll', function(event) {
	"use strict";
	var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;

	for(var i =0; i < fadeItems.length; i++) {
		if( (fadeItems[i].offsetTop - y) < 750){
			toggleFadeIn(fadeItems[i]);
		}
	}

	toggleFadeOut(scrollDown);


	// if(y>lastScrollTop){
	// 	if(downToggle == 'false') {
	// 		upToggle = 'true';
	// 		bgDownMove(bg1, y, 0.7, 2, 0);
	// 		downToggle ='true';
			
	// 	}	
	// } else if (y < lastScrollTop && y < 500){
	// 	if(upToggle == 'false') {
	// 		downToggle = 'true';
	// 		bgUpMove(bg1, y, 0.7, 2, 0);
	// 		upToggle ='true';
	// 	}
	// }
	
 // 	lastScrollTop = y <= 0 ? 0 : y; // For Mobile or negative scrolling


});

// function bgDownMove(bg, y, s, b, speed) {
//   var elem = bg;
  
//   var down = setInterval(frame1, speed);
 
//   function frame1() {
//     if (y > 500 || offset1 > 500) {
//       clearInterval(down);
//       upToggle = 'false';
//     } else {
//       offset1 += s;
//       offset2 += b; 
     
//       var points = '-100,0 2000,0 2000,' + offset2 + ' -100,' + offset1;
//       elem.setAttribute('points', points);
//       blur.setAttribute('stdDeviation', offset1/3);
//     }
//   }
// }

// function bgUpMove(bg, y, s, b, speed) {
//   var elem = bg;
//   var up = setInterval(frame2, speed);
 
//   function frame2() {

//     if (offset1 < 3) {
//       clearInterval(up);
//       blur.setAttribute('stdDeviation', 0);
//       var points = '-100,0 2000,0 2000,0 -100,0';
//       elem.setAttribute('points', points);
//       downToggle = 'false';
     
//     } else {
//       offset1 -= s;
//       offset2 -= b; 
//       console.log(offset1);
     
//       var points = '-100,0 2000,0 2000,' + offset2 + ' -100,' + offset1;
//       elem.setAttribute('points', points);
//       blur.setAttribute('stdDeviation', offset1/3);
//     }
//   }
// }



function toggleFadeIn(target){
	if(target.getAttribute('fade') == 'false') {
		target.setAttribute('style','animation: fadeIn 1s ease-in;');
		target.setAttribute('fade','true');
	}
}

function toggleFadeOut(target){
	if(target.getAttribute('fade') == 'true') {
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