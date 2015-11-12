$(document).ready(function() {
	
	// define array of image paths (src) and captions (figcaption) 
	var images = [ {src:"images/ascott.jpg", figcaption:"Ascott House, Buckinghamshire, England"}, {src:"images/cinqueterre2.jpg", figcaption:"Riomaggiore, Cinque Terre, Italy"}, {src:"images/gullfoss.jpg", figcaption:"Gullfoss Waterfall, Iceland"}, {src:"images/amsterdam-canals.jpg", figcaption:"Amsterdam canals"}, {src:"images/santorini2.jpg", figcaption:"Santorini, Greece"}, {src:"images/eiffeltower2.jpg", figcaption:"Eiffel Tower, Paris, France"}, {src:"images/lochleven-castle.jpg", figcaption:"Lochleven Castle, Perthshire, Scotland"}, {src:"images/florence2.jpg", figcaption:"The Duomo, Florence, Italy"}, {src:"images/blue-lagoon.jpg", figcaption:"Blue Lagoon, Iceland"}, {src:"images/rome2.jpg", figcaption:"The Colosseum, Rome, Italy"}, {src:"images/spain2.jpg", figcaption:"Barcelona, Spain"} ]; 
		// index to select item in array 
		var i=0; 
		// use the jQuery function ($) to select the <img> and <figcaption> by id 
		var img = $("#rotate-img"); var fig = $("#rotate-caption") 
		// set the initial src and figcaption values 
		img.attr("src", images[i].src); fig.html(images[i].figcaption); 
		// advance to next image 
		i++; 
		// setInterval takes two parameters, a callback and an interval 
		window.setInterval(function() { 
		// reset the index to 0 if past the end 
		if( i >= images.length) { 
			i = 0; } 
		// hide the current image then fade the new image in and set the new caption 
		img.hide(); 
		img.attr("src", images[i].src).fadeIn("slow"); 
		fig.html(images[i].figcaption); 
		// advance to next image 
		++i; }, 
		// set the image time to 5000ms 
		5000 );									


	$(".card").flip({
		forceHeight: true,
		trigger: 'click'});

});