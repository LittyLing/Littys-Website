// home page scripts
$(document).ready(function() {
	// home page animation
	$("#homeContentWrapper article:not(#homeContentWrapper article:nth-of-type(1))").hide();
	
	setTimeout(function() {
		$("#homeContentWrapper article:nth-of-type(1) .heading").css("opacity", "1");
		setTimeout(function() {
			$("#homeContentWrapper article:nth-of-type(1) .subheading").css("opacity", "1");
			$("#homeContentWrapper article:nth-of-type(1) .ghostButton").css("opacity", "1");
			$("#homeContentWrapper article:nth-of-type(1) .ghostButton").css("visibility", "visible");
		}, 1500);
	}, 2550);
	
	$("#homeContentWrapper article:nth-of-type(1) .ghostButton").click(function() {
		$("#homeContentWrapper article").show("slow");
		setTimeout(function() {
			$("html, body").animate({
				scrollTop: $("#homeContentWrapper article:nth-of-type(2)").offset().top
			}, 1000);
			$("#homeContentWrapper .scrollbarButtons").css("opacity", "1");
			$("#homeContentWrapper .scrollbarButtons").css("visibility", "visible");
			$("#homeContentWrapper .scrollbarButtons li").removeClass("active");
			$("#homeContentWrapper .scrollbarButtons li:nth-of-type(2)").addClass("active");
		}, 200);
	});
	
	// home page scrollbars
	$("#homeContentWrapper .scrollbarButtons li").click(function() {
		$("#homeContentWrapper .scrollbarButtons li").removeClass("active");
		$(this).addClass("active");
		$("html, body").animate({
			scrollTop: $("#homeContentWrapper article:nth-of-type(" + ($("#homeContentWrapper .scrollbarButtons li").index(this) + 1) + ")").offset().top
		}, 500);
	});
});