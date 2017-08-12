$(document).ready(function() {
    $(".gallery-start").click(function(event) {
		var img = $(event.target);
		var sidetext = img.siblings(".sidetext");
		var small = img.attr("src");
		var big = small.replace(/_preview\.jpg/, ".jpg").replace(/_preview\.JPG/, ".JPG");

		$(".overlay img").replaceWith(img.clone());
		$(".overlay img").attr("src", big)
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
})