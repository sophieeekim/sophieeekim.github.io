const slideImages = document.getElementsByClassName('slide-images');
const slideSize = slideImages.length; 
const dots = document.getElementsByClassName('dot');
let currentSlide = 0;

const slidePrevious = document.getElementsByClassName('arrow-left');
const slideNext = document.getElementsByClassName('arrow-right');

for(let i = 0 ; i <slideSize; i++){
	slideImages[i].setAttribute('slide-num', i);
	dots[i].setAttribute('slide-num', i);
}

slideImages[currentSlide].classList.add('slide-selected');

function slideShow(currentSlide){
	for(let j=0; j<slideSize; j++){
			if(currentSlide != j){
			dots[j].classList.remove('dot-selected');
			slideImages[j].classList.remove('slide-selected');
			}
		}
		// target.classList.add('dot-selected');
		dots[currentSlide].classList.add('dot-selected');
		slideImages[currentSlide].classList.add('slide-selected');
}

for(let l=0; l<slidePrevious.length; l++){
	slidePrevious[l].addEventListener('click', function(event){
		if(currentSlide == 0 ){
			currentSlide = slideSize;
		}
		currentSlide--;

		slideShow(currentSlide);
	});
}

for(let p=0; p<slideNext.length; p++){
	slideNext[p].addEventListener('click', function(event){
		if(currentSlide == (slideSize-1) ){
			currentSlide = -1;
		}
		currentSlide++;

		slideShow(currentSlide);
	});
}

for(let k=0; k<slideSize; k++){
	dots[k].addEventListener('click', function(event){
		const target = event.target;
		currentSlide = target.getAttribute('slide-num');

		slideShow(currentSlide);

	});
}
