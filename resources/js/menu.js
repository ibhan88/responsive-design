function myFunction() {
  var x = document.getElementById("nav-links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


function onResize() {
	var x = document.getElementById("nav-links");
	var w = window.innerWidth;
	if (w > 1000) {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}