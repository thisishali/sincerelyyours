$(document).ready(function() {
    $(".gallery-start").click(function(event) {
		var img = $(event.target);
		var sidetext = img.siblings(".sidetext");
		$(".overlay img").replaceWith(img.clone());
		$(".overlay .sidetext").replaceWith(sidetext.clone());
        $(".overlay").fadeIn();
	});
	
	$("#wrapper").click(function(event) {
		event.stopPropagation();
	});
	$("html").click(function() {
        $(".overlay").fadeOut();
    });
	$(".close").click(function() {
        $(".overlay").fadeOut();
	});
	$("img").click(function(event) {
		console.log(event.target);
		
	});
	$("img.lazy").scroll(function(sporty) {
		console.log(sporty.target);
	});
    $("img.lazy").lazyload({
        event : "sporty",
		effect : "fadeIn"
    });
    var timeout = setTimeout(function() {
        $("img.lazy").trigger("sporty")
    }, 5000);
})