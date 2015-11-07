$(document).on('scroll', function() {

	if ($(document).scrollTop() > 100) {
		$("#nav").addClass("small");
		$("#nav").css("background-color", "rgba(0,0,0,0.8)");
	} else {
		$("#nav").removeClass("small");
		$("#nav").css("background-color", "transparent");
	}
});


$('div#submit').on('click', function() {
	alert("message sent");
});

$('.menu_button').click(function(e) {
	e.preventDefault();
	$(".wrapper").toggleClass("open");
	$(this).toggleClass('close')
}); 


