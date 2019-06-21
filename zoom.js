var images = document.getElementsByClassName('zoom');
var modal = document.getElementById('modal');
var modalImages = document.getElementsByClassName('modal-images');
var modalSwitch = false;
var slidePrevious = document.getElementById('slide-previous');
var slideNext = document.getElementById('slide-next');
var currentSlide = 14;

slidePrevious.addEventListener('click', function(event) {
	if(currentSlide == 0) {
		currentSlide = 13;
	} else {
		currentSlide--;
	}

	for (var j=0; j<images.length; j++){
			if(j == currentSlide){
				modalImages[currentSlide].setAttribute('style','display: block;');

			} else {
				modalImages[j].setAttribute('style','display: none;');
			}
	}
});

slideNext.addEventListener('click', function(event) {
	if(currentSlide == 13) {
		currentSlide = 0;
	} else {
		currentSlide++;
	}

	for (var j=0; j<images.length; j++){
			if(j == currentSlide){
				modalImages[currentSlide].setAttribute('style','display: block;');

			} else {
				modalImages[j].setAttribute('style','display: none;');
			}
	}
});


for( var i=0; i<images.length; i++){
	images[i].addEventListener('click', function(event){
		if(modalSwitch == false){
		var target = event.target;
		var slide = target.getAttribute('slide');
		currentSlide = slide;
		modalSwitch = true;

		for (var j=0; j<images.length; j++){
			if(j == slide){
				modalImages[slide].setAttribute('style','display: block;');

			} else {
				modalImages[j].setAttribute('style','display: none;');
			}
		}
		modal.setAttribute('style','display:block; opacity:1;');
		//toggleFadeIn(modal);
		console.log(modal.getAttribute('style'));
		document.body.setAttribute('style','overflow:hidden;');
		}
	});
}



	
for( var k=0; k<images.length; k++){
	modalImages[k].addEventListener('click', function(event){
		if(modalSwitch == true) {
			modal.setAttribute('style','display:none;');
			document.body.setAttribute('style','overflow:auto;');
			modalSwitch = false;
		}

	});
}


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
}