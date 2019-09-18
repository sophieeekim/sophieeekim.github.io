const images = document.getElementsByClassName('zoom');
const modal = document.getElementById('modal');
const modalImages = document.getElementsByClassName('modal-images');

const slidePrevious = document.getElementById('modal-previous');
const slideNext = document.getElementById('modal-next');

let currentSlide = 14;
let modalSwitch = false;

for(let img of modalImages){
	img.setAttribute('fade','false');
}

slidePrevious.addEventListener('click', function(event) {
	if(currentSlide == 0) {
		currentSlide = 13;
	} else {
		currentSlide--;
	}

	for (let j=0; j<images.length; j++){
			if(j === currentSlide){
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

	for (let j=0; j<images.length; j++){
			if(j == currentSlide){
				modalImages[currentSlide].setAttribute('style','display: block;');

			} else {
				modalImages[j].setAttribute('style','display: none;');
			}
	}
});


for( let i=0; i<images.length; i++){
	images[i].addEventListener('click', function(event){
		if(!modalSwitch){
		const target = event.target;
		const slide = target.getAttribute('slide');
		currentSlide = slide;
		modalSwitch = true;
		
		for (let l=0; l<images.length; l++){
			if(l == slide){
				
				modalImages[slide].setAttribute('style','display: block;');
			} else {
				modalImages[l].setAttribute('style','display: none;');
			}
		}
		
		modal.setAttribute('style','display:block;');
		modal.classList.add("fade-in");
		modal.classList.remove("fade-out");
		document.body.setAttribute('style','overflow:hidden;');
		}
	});
}



	
for(let k=0; k<images.length; k++){
	modalImages[k].addEventListener('click', function(event){
		if(modalSwitch) {
			modal.classList.remove("fade-in");
			modal.classList.add("fade-out");
			setTimeout(function(){modal.setAttribute('style','display:none;');}, 500);
			document.body.setAttribute('style','overflow:auto;');
			modalSwitch = false;
		}

	});
}


