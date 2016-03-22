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
 (function () {
     lightbox.option({
        'showImageNumberLabel': false
     });
})(jQuery);
	


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

ymaps.ready(init);
        
function init() {
	if ($(window).width() > 1024) {
		var c = [59.850527, 30.326033];
	} else {
		var c = [59.843319, 30.304693];
	}
	var myMap = new ymaps.Map('map', {
		center: c,
        zoom: 15,
        controls: [],        
    })  ,
    myPlacemark = new ymaps.Placemark([59.850527, 30.304693], {
        hintContent: 'Санкт-Петербург пл. конституции д.3 корп 2 лит. А. 33 этаж БЦ Лидер Тауэр',
        balloonContent: 'Санкт-Петербург пл. конституции д.3 корп 2 </br> лит. А. 33 этаж БЦ Лидер Тауэр'
        
    },
    {
        preset: 'islands#dotIcon',
        iconColor: 'red'
    })
    
    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects.add(myPlacemark);
} 

$(function() {

    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function() {
        $('body,html').animate({scrollTop: 0}, 1000);
    });

    $('.smoothScroll').click(function(event) {
        event.preventDefault();
        var href=$(this).attr('href');
        var target=$(href);
        var top = target.offset().top;
        $('html,body').animate({
            scrollTop: top
        }, 1000);
    });

	
});




$(window).scroll(function () {
   var head_h = $('.header').height() + $('.navigation').height() - 50;

    if (window.pageYOffset > head_h) {
    	console.log('yes man');
        $(".navigation").addClass("navigation--fixed");
        //$(".header--onScroll").removeClass(".header");       
    } else {
        // $(".header--onScroll").addClass("header");
        $(".navigation").removeClass("navigation--fixed");
    };
});