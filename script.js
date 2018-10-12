$(document).ready(function(){

	$("#alt_body , .alt").hide();

	var x = 0;

	$("#menu_icon").click(function(){
		$("#alt_body").fadeToggle();
		$(".alt").fadeToggle( 60 );
		$("#logo_bar").toggleClass("expanded");
		$("#logo").toggleClass("inverted");
		$("#menu_icon").toggleClass("toggled");
		$("#right_white_box").toggleClass("toggled");
		$("#left_white_box").toggleClass("toggled");

		if(x == 0) {
			$("#icon").attr("src","logo/menu_icon_x.svg"); 
			x = 1;
		}
		else if(x == 1) {
			$("#icon").attr("src","logo/menu_icon.svg");
			x = 0;
	    };

	});


});