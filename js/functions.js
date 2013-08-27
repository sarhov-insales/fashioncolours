jQuery(document).ready(function($) {
	$('.mobile-nav').click(function() {
		$('.top-menu-nav').slideToggle();
		$(this).toggleClass('mobile-nav-open');
	});

	$('.top-nav-menu-open').click(function() {
		$(this).toggleClass('mobile-active-open').next('nav').slideToggle();
	});;
});