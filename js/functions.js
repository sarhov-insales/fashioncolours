jQuery(document).ready(function($) {

	if ($('.mobile-nav').is(':visible')) {


	$('.mobile-nav').click(function() {
		$('.top-menu-nav').slideToggle();
		$(this).toggleClass('mobile-nav-open-active');
	});

	$('.top-nav-menu-open').click(function() {
		$(this).toggleClass('mobile-active-open').next('nav').slideToggle();
	});;

	$('.property-opener').click(function(){
		$(this).toggleClass('activator');
		$('.main-content-content').toggleClass('filter-opened');
	});
} 
});