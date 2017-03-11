// var height= $(window).height() - 40;
$(".imgSection").css("min-height",$(window).height() - 110);
$(".aboutSection").css("min-height",$(window).height() - 110);
$(".workSection").css("min-height",$(window).height() - 90);
$(".quoteSection").css("min-height",$(window).height() - 490);
$(".contactSection").css("min-height",$(window).height() - 240);


$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	$('.homeContent').css({
		'transform' : 'translate(0px, '+ wScroll / 14 +'%)'
	});

	// $('.bgImg').css({
	// 	'transform' : 'translate(0px, -'+ wScroll / 16 +'%)'
	// });
});