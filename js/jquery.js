$(document).ready(function() {

	$( "#sidenavbutton" ).click(function() {
		if ($('#sidenav').css('display') == 'none') {
            $("#sidenav").show("slide", 500);
            $("#sidenavbutton").addClass("navbuttonopen");
        } 

        else {
            $("#sidenav").hide("slide", 500);
            $("#sidenavbutton").removeClass("navbuttonopen");
        };
	});

	$( "#topics" ).click(function() {
		if ($('#topicsmenu').css('display') == 'none') {
            $("#topicsmenu").show("slide", {direction: "down" }, 500);
        } 

        else {
            $("#topicsmenu").hide("slide", {direction: "down" }, 500);
        };
	});


	/* LANDING PARALLAX */

	var scene = $('.orbitstage').get(0);
		var parallaxInstance = new Parallax(scene, {
			relativeInput: true,
			pointerEvents: true,
			invertX: true,
			invertY: true,
			frictionX: 0.1,
			frictionY: 0.1,
			originX: 0.5,
			originY: 0.5,
			limitX: false,
			limitY: false,
			scalarX: 4,
			scalarY: 4
		});

	var scene = $('#missionanchor').get(0);
		var parallaxInstance = new Parallax(scene, {
			relativeInput: true,
			pointerEvents: true,
			invertX: true,
			invertY: true,
			frictionX: 0.1,
			frictionY: 0.1,
			originX: 0.2,
			originY: 0.2,
			limitX: false,
			limitY: false,
			scalarX: 3,
			scalarY: 3
		});

	var scene = $('#imagesanchor').get(0);
		var parallaxInstance = new Parallax(scene, {
			relativeInput: true,
			pointerEvents: true,
			invertX: true,
			invertY: true,
			frictionX: 0.1,
			frictionY: 0.1,
			originX: 0.2,
			originY: 0.2,
			limitX: false,
			limitY: false,
			scalarX: 4,
			scalarY: 4
		});

	var scene = $('#newsanchor').get(0);
		var parallaxInstance = new Parallax(scene, {
			relativeInput: true,
			pointerEvents: true,
			invertX: true,
			invertY: true,
			frictionX: 0.1,
			frictionY: 0.1,
			originX: 0.2,
			originY: 0.2,
			limitX: false,
			limitY: false,
			scalarX: 3,
			scalarY: 3
		});

	var scene = $('#observanchor').get(0);
		var parallaxInstance = new Parallax(scene, {
			relativeInput: true,
			pointerEvents: true,
			invertX: true,
			invertY: true,
			frictionX: 0.1,
			frictionY: 0.1,
			originX: 0.2,
			originY: 0.2,
			limitX: false,
			limitY: false,
			scalarX: 2,
			scalarY: 2
		});

	var scene = $('#discanchor').get(0);
		var parallaxInstance = new Parallax(scene, {
			relativeInput: true,
			pointerEvents: true,
			invertX: true,
			invertY: true,
			frictionX: 0.1,
			frictionY: 0.1,
			originX: 0.2,
			originY: 0.2,
			limitX: false,
			limitY: false,
			scalarX: 3,
			scalarY: 3
		});

});