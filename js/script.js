// When the user clicks on the button, toggle between hiding and showing the dropdown content
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it

window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementByClassname("dropdown-content");
		var i; 
		for (i=0; i< dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			
			if(openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}


function insert() {
	var src = document.getElementById("specialimage");
	var img = document.createElement("img");
	var date = new Date();
              var dayofWeek = date.getDay();
              
              if (dayofWeek == 2) {
              	img.src = "images/tacotuesdays2.jpg";
              }

              else if (dayofWeek == 3) {
              	img.src = "images/margeritawednesday2.jpg";
              }

              else if (dayofWeek == 5) {
               img.src = "images/fajitafriday.jpg";
              }

              else {
              	img.src = "images/Los Mochis Picture2.jpg";
              }
	
	src.appendChild(img);
}
