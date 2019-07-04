var buttons = document.getElementsByClassName('locked');

for(var i=0; i<buttons.length; i++){
	buttons[i].addEventListener('click', function(event){
		var password = "please";
		var x = prompt("Oops! Due to NDA, the content is locked. Please contact me for the password! eunkyeok@alumni.cmu.edu "," ");
		if(x === null) {
			console.log("null");
			return;
	
		}

		if (x.toLowerCase() == password) {
		  alert("Come right in \n \n You've entered in the right password");
		 window.location = "omen.html";
		}
		else {
			alert("Sorry, this is the wrong password :/")
		  return;
		}
	});
}


