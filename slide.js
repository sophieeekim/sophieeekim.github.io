var slideImages = document.getElementsByClassName('slide-images');
var slideSize = slideImages.length; 
var dots = document.getElementsByClassName('dot');
var currentSlide = 0;
var currentWindow = 0;
var slidePrevious = document.getElementsByClassName('arrow-left');
var slideNext = document.getElementsByClassName('arrow-right');

for(var i = 0 ; i <slideSize; i++){
	slideImages[i].setAttribute('slide-num', i);
	dots[i].setAttribute('slide-num', i);
}

slideImages[currentSlide].classList.add('slide-selected');

function slideShow(currentSlide){
	for(var j=0; j<slideSize; j++){
			if(currentSlide != j){
			dots[j].classList.remove('dot-selected');
			slideImages[j].classList.remove('slide-selected');
			}
		}
		// target.classList.add('dot-selected');
		dots[currentSlide].classList.add('dot-selected');
		slideImages[currentSlide].classList.add('slide-selected');
}

for(var l=0; l<slidePrevious.length; l++){
	slidePrevious[l].addEventListener('click', function(event){
		if(currentSlide == 0 ){
			currentSlide = slideSize;
		}
		currentSlide--;

		slideShow(currentSlide);
	});
}

for(var p=0; p<slideNext.length; p++){
	slideNext[p].addEventListener('click', function(event){
		if(currentSlide == (slideSize-1) ){
			currentSlide = -1;
		}
		currentSlide++;

		slideShow(currentSlide);
	});
}

for(var k=0; k<slideSize; k++){
	dots[k].addEventListener('click', function(event){
		var target = event.target;
		currentSlide = target.getAttribute('slide-num');

		slideShow(currentSlide);

	});
}
