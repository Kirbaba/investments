$(document).ready(function(){
   var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        loop: true
    });

   jQuery(function ($) {
	    jQuery('.savemoney-slider').slick({
	        dots: false,
	        infinite: true,
	        autoplay: true,
	        adaptiveHeight: true,
	        speed: 300,
	        arrows: true,        
	        slidesToShow: 1,
	        focusOnSelect: false,
	        slidesToScroll: 1
		});		

	});

   jQuery(function ($) {
	    jQuery('.reviews__slider').slick({
	        dots: false,
	        infinite: true,
	        autoplay: true,
	        adaptiveHeight: true,
	        speed: 300,
	        arrows: true,        
	        slidesToShow: 1,
	        focusOnSelect: false,
	        slidesToScroll: 1
		});		

	});

   $('.calculator--range--month--procents').css(
   {
   	"width": $('.calculator--range--month .irs-grid').width()
   });

});

jQuery(function ($) {
   jQuery("#range_50a").ionRangeSlider({
	    type: "single",
	    values: ["100т.", "500т.", "1 млн.", "5 млн."],
	    decorate_both: false,
	    grid: true,
	    force_edges: true,
	    grid_snap: true,
	    hide_min_max: true,
	    hide_from_to: true
	});
   jQuery("#range_50").ionRangeSlider({
	    type: "single",
	    values: ["6", "12", "24"],
	    decorate_both: false,
	    grid: true,
	    force_edges: true,
	    grid_snap: true,
	    hide_min_max: true,
	    hide_from_to: true
	});

});
