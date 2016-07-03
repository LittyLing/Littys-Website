// projects page scripts
$(document).ready(function() {
	// projects container animation
	$(".projectContainer").mouseenter(function() {
		$(this).children().css("opacity", 0.8);
		$(this).css("background-size", "350px 350px");
	});
	
	$(".projectContainer").mouseleave(function() {
		$(this).children().css("opacity", 0);
		$(this).css("background-size", "300px 300px");
	});
});