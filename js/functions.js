// var height= $(window).height() - 40;
$(".imgSection").css("min-height",$(window).height() - 80);
$(".aboutSection").css("min-height",$(window).height() - 70);
$(".aboutSection").css("min-height",$(window).height() - 90);


$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	$('.homeContent').css({
		'transform' : 'translate(0px, '+ wScroll / 14 +'%)'
	});

	// $('.bgImg').css({
	// 	'transform' : 'translate(0px, -'+ wScroll / 16 +'%)'
	// });
});