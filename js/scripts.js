(function ($) {
	'use strict'; // Start of use strict

	// Smooth scrolling using anime.js
	$('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function () {
		if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
			location.hostname == this.hostname
		) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				anime({
					targets: 'html, body',
					scrollTop: target.offset().top,
					duration: 1000,
					easing: 'easeInOutExpo',
				});
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll-trigger').on('click', function () {
		$('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
	});
})(jQuery); // End of use strict

/* Scroll Reveal Animation */
const sr = ScrollReveal({
	origin: 'top',
	distance: '80px',
	duration: 2000,
	reset: false,
});

/*Scroll About*/
sr.reveal('.name', { delay: 100 });
sr.reveal('.details', { delay: 200 });
sr.reveal('.lead', { delay: 300 });
sr.reveal('.social-icon', { delay: 400, interval: 100 });

/*Scroll Skills*/
sr.reveal('.skills__title', {});
sr.reveal('.skills__text', { delay: 200 });
sr.reveal('.list-inline-item', { delay: 400, interval: 100 });

/*SCROLL Certificates*/
sr.reveal('.certifications__title', {});
sr.reveal('.certifications__list>li', { delay: 400, interval: 300 });

/*Scroll Projects*/
sr.reveal('.projects__title', {});
sr.reveal('.project__title', { delay: 400, interval: 300 });
sr.reveal('.project__preview', { delay: 500, interval: 300 });

/*Scroll Education*/
sr.reveal('.education__title', {});
sr.reveal('.education__text', { delay: 100 });
sr.reveal('.education__subtext', { delay: 150 });
sr.reveal('.education__courses', { delay: 200 });
sr.reveal('.education__subject', { delay: 250, interval: 50 });
sr.reveal('.education__marks', { delay: 700 });
sr.reveal('.education__class', { delay: 300 });
