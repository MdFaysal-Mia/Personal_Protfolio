(function ($) {
	"use strict";

	/*******************************************************
	 Smooth scrolling using jQuery easing
	*******************************************************/
	$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
			$('html, body').animate({
			scrollTop: (target.offset().top - 50)
			}, 1000, "easeInOutExpo");
			return false;
		}
		}
	});

	/******************************************************
		Closes responsive menu when a scroll trigger link is clicked
	****************************************************** */
	$('.js-scroll-trigger').click(function() {
		$('.navbar-collapse').collapse('hide');
	});

	/* ******************************************************
	Activate scrollspy to add active class to navbar items on scroll
	****************************************************** */
	$('body').scrollspy({
		target: '#mainNav',
		offset: 56
	});

	/* ******************************************************
			Sticky Menu JS
	*******************************************************/
	var sticky =$(".navbar");

	$(window).on('scroll', function() {

		var scroll = $(window).scrollTop();

		if(scroll < 50) {
			sticky.removeClass('sticky');
			$('.back-top').fadeIn(500);
		} else {
			sticky.addClass('sticky');
			$('.back-top').fadeIn(500);
		}
	});


	/* ************************************************
		Testimonial Active
	************************************************** */
	$('.testimonial-active').owlCarousel({
			loop:true,
			margin:30,
			items:2,
			nav: false,
			autoplay:true,
			autoplayHoverPause: true,
			autoplaySpeed: 800,
			responsive:{
				0:{
					items:1,
					nav:false
				},
				768:{
					items:2,
					nav:false
				},
				992:{
					items:2,
					nav:false
				},
				1200:{
					items:2,
					nav:false
				},
				1600:{
					items:3,
					nav:false
			}
		}
	});

	/****************************************************
	Mixitup Active
	*****************************************************/
	var mixer = mixitup('.protfolio-items');

	/* ***************************************************
		MagnificPopup img view
	***************************************************** */

	$('.popup').magnificPopup({
		type:'image',
		gallery:{
			enabled:true,
		}
	});

	/*******************************************
	 types js  
	*************************************/ 
	var types = $('#types');

    if (types.length) {
        var typed = new Typed('#types', {
            strings: [
                'Web Developer',
                'entertainer',
                'athlete'
            ],
            typeSpeed: 50,
            backSpeed: 50,
            startDelay: 1000,
            backDelay: 1000,
            loop: true,
        });
	}


	/*********************************************************
	 wow js
	***********************************************************/
	new WOW().init();


})(jQuery);	