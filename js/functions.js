jQuery(document).ready(function($) {
	$('.mobile-nav').click(function() {
		$('.top-menu-nav').slideToggle();
	});

	$('.top-nav-menu-open').click(function() {
		$(this).next('nav').slideToggle();
	});;
});