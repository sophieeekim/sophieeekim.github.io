var images = document.getElementsByClassName('zoom');
var modal = document.getElementById('modal');
var modalImages = document.getElementsByClassName('modal-images');
var modalSwitch = false;
var slidePrevious = document.getElementById('modal-previous');
var slideNext = document.getElementById('modal-next');
var currentSlide = 14;


for (var l=0; l < modalImages.length; l++) {
	modalImages[l].setAttribute('fade','false');
}

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
		
		modal.setAttribute('style','display:block;');
		modal.classList.add("fade-in");
		modal.classList.remove("fade-out");
		document.body.setAttribute('style','overflow:hidden;');
		}
	});
}



	
for( var k=0; k<images.length; k++){
	modalImages[k].addEventListener('click', function(event){
		if(modalSwitch == true) {
			modal.classList.remove("fade-in");
			modal.classList.add("fade-out");
			setTimeout(function(){modal.setAttribute('style','display:none;');}, 500);
			document.body.setAttribute('style','overflow:auto;');
			modalSwitch = false;
		}

	});
}


