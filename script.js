$(document).ready(function(){
	$("#menu").click(function() {
		$("#menu_box").toggle();

		var el = $(this);
			if (el.text() == el.data("text-swap")) {
				el.text(el.data("text-original"));
			} else {
				el.data("text-original", el.text());
				el.text(el.data("text-swap"));
			}
	});
});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
	  showDivs(slideIndex += n);
}

function showDivs(n) {
	var i;
	var x = document.getElementsByClassName("slides");
	if (n > x.length) {slideIndex = 1} 
	if (n < 1) {slideIndex = x.length} ;
	for (i = 0; i < x.length; i++) {
	x[i].style.display = "none"; 
	}
	x[slideIndex-1].style.display = "block"; 
}