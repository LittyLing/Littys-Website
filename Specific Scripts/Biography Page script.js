// projects page scripts
$(document).ready(function() {
	// section container animation
	$(".links a.sectionHeading").click(function() {
        $(".sectionContainer." + jQuery(this).attr('class').split(' ')[0]).toggleClass("open");
		
		if ($(".sectionContainer." + jQuery(this).attr('class').split(' ')[0]).hasClass("open")) {
			$(".sectionContainer." + jQuery(this).attr('class').split(' ')[0]).css("max-height", "700px");
		} else {
			$(".sectionContainer." + jQuery(this).attr('class').split(' ')[0]).css("max-height", "0px");
		}
	});
});