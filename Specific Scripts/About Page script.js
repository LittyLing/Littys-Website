// about page scripts
$(document).ready(function() {
	// hiding section containers
	$(".sectionContainer").hide();
	
	// section container animation
	$("a.sectionHeading").click(function() {
		$("html, body").animate({scrollTop: "0px"});
        $(".aboutContainerLinkContainer").fadeOut(500);
		$(".sectionContainer." + jQuery(this).attr('class').split(' ')[0]).delay(600).show(500);
	});
	
	$("span.links a.return").click(function() {
		$(".sectionContainer").hide(500);
		$(".aboutContainerLinkContainer").delay(600).fadeIn(500);
	});
});