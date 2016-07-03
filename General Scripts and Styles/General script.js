// general webpage scripts
$(document).ready(function() {
	// initial page animation
	$("#wrapper").hide();
	$("body").prepend("<div id = 'loadingIconContainer' style = 'text-align: center; margin-top: 30vh;'><img id = 'loadingIcon' style = 'width: 100px' src = 'https://s32.postimg.org/ljtziu751/Litty_s_Logo.jpg'/></div>");
	$("#loadingIcon").hide();
	$("#loadingIcon").fadeIn(1000);
	setTimeout(function() {
		rotateLoadingIcon();
	}, 1000);
	
	var degree = 0;
	
	// rotate loading icon function
	function rotateLoadingIcon() {
		$("#loadingIcon").css("-webkit-transform", "rotate(" + degree + "deg)");
		$("#loadingIcon").css("-moz-transform", "rotate(" + degree + "deg)");
		$("#loadingIcon").css("-ms-transform", "rotate(" + degree + "deg)");
		$("#loadingIcon").css("-o-transform", "rotate(" + degree + "deg)");
		$("#loadingIcon").css("transform", "rotate(" + degree + "deg)");
		
		setTimeout(function() {
			if (degree < 360) {
				degree += 4;
				rotateLoadingIcon();
			} else {
				$("#loadingIconContainer").fadeOut(1000);
				$("#wrapper").delay(1000).fadeIn(1000);
			}
		}, 5);
	};
    
    // header navbar animation
    var animating = false;
    
    // open and close functions
    function closeHeaderNavbar() {
        animating = true;
        // close menu
        $("#navigationButtons").css("left", "-500px");
		// header color change
		$("header.primary").css("color", "#0288D1");
        // animating menu icon
        $(".menuIconDiv:nth-child(1)").css("-webkit-transform", "rotate(45deg)");
        $(".menuIconDiv:nth-child(1)").css("-ms-transform", "rotate(0deg)");
        $(".menuIconDiv:nth-child(1)").css("-moz-transform", "rotate(0deg)");
        $(".menuIconDiv:nth-child(1)").css("-o-transform", "rotate(0deg)");
        $(".menuIconDiv:nth-child(1)").css("transform", "rotate(0deg)");
        $(".menuIconDiv:nth-child(3)").css("-webkit-transform", "rotate(0deg)");
        $(".menuIconDiv:nth-child(3)").css("-ms-transform", "rotate(0deg)");
        $(".menuIconDiv:nth-child(3)").css("-moz-transform", "rotate(0deg)");
        $(".menuIconDiv:nth-child(3)").css("-o-transform", "rotate(0deg)");
        $(".menuIconDiv:nth-child(3)").css("transform", "rotate(0deg)");
        setTimeout(function() {
            $(".menuIconDiv:nth-child(1)").css("margin-top", "5px");
            $(".menuIconDiv:nth-child(2)").css("margin-top", "5px"); 
            $(".menuIconDiv:nth-child(3)").css("margin-top", "5px");
            $(".menuIconDiv:nth-child(2)").css("visibility", "visible");
            animating = false;
        }, 500);
    };
    
    function openHeaderNavbar() {
        animating = true;
        // open menu
        $("#navigationButtons").css("left", "0%");
		// header color change
		$("header.primary").css("color", "#FFFFFF");
        // animating menu icon
        $(".menuIconDiv:nth-child(2)").css("visibility", "hidden");
        $(".menuIconDiv:nth-child(1)").css("margin-top", "13px");
        $(".menuIconDiv:nth-child(2)").css("margin-top", "-3px");
        $(".menuIconDiv:nth-child(3)").css("margin-top", "-3px");
        setTimeout(function() {
            $(".menuIconDiv:nth-child(1)").css("-webkit-transform", "rotate(45deg)");
            $(".menuIconDiv:nth-child(1)").css("-ms-transform", "rotate(45deg)");
            $(".menuIconDiv:nth-child(1)").css("-moz-transform", "rotate(45deg)");
            $(".menuIconDiv:nth-child(1)").css("-o-transform", "rotate(45deg)");
            $(".menuIconDiv:nth-child(1)").css("transform", "rotate(45deg)");
            $(".menuIconDiv:nth-child(3)").css("-webkit-transform", "rotate(-45deg)");
            $(".menuIconDiv:nth-child(3)").css("-ms-transform", "rotate(-45deg)");
            $(".menuIconDiv:nth-child(3)").css("-moz-transform", "rotate(-45deg)");
            $(".menuIconDiv:nth-child(3)").css("-o-transform", "rotate(-45deg)");
            $(".menuIconDiv:nth-child(3)").css("transform", "rotate(-45deg)");
            animating = false;
        }, 500);
    };
    
    $("header.primary nav .menuIcon").click(function() {
        // toggling header navbar class on click
        $("#navigationButtons").toggleClass("open");
        // toggling header navbar class on click
        $("header.primary nav .menuIcon").toggleClass("active");
        
        if (!$("header.primary nav .menuIcon").hasClass("active") && !$("#navigationButtons").hasClass("open") && !animating) {
            // close menu
            closeHeaderNavbar();
        } else if ($("header.primary nav .menuIcon").hasClass("active") && $("#navigationButtons").hasClass("open") && !animating) {
            // open menu
            openHeaderNavbar();
        }
    });
    
    // header navbar animation upon document click
    $("main.primary, footer.primary").click(function() {
        if ($("header.primary nav .menuIcon").hasClass("active") && $("#navigationButtons").hasClass("open") && !animating) {
            // toggling header navbar class on click
            $("#navigationButtons").toggleClass("open");
            // toggling header navbar class on click
            $("header.primary nav .menuIcon").toggleClass("active");
            closeHeaderNavbar();
        }
    });
});